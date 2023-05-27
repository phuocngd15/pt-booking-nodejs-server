import { Router } from 'express';
import { IAccount, ITrainer, IUser } from '../dbModels/interface';
import AccountsService from '../accounts/accounts.service';
import { sendMailResetPass } from '../mail/mail.service';
import ResetToken from '../dbModels/resetToken.model';
import AccountsModel from '../dbModels/accounts.model';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import bcrypt from 'bcrypt';
import UsersService from '../users/users.service';
import { findTrainerByAccountID } from '../trainers/trainers.service';

const secretKey = 'mysecretkey';

export interface UseInfoType {
  name: string;
  userid: string;
  email: string;
  signature: string;
  introduction: string;
  title: string;
  token: string;
  power: string;
}

// const users = [
//     { id: 1, username: 'admin@gmail.com', password: '$2b$10$Y.0du4qroUxZRctUIwNjs.VTBz1BS98NJQ8UItyaxVXoFQEUlzLIm' } // password: "admin123"
// ];
const accountService = new AccountsService();
const usersService = new UsersService();
const router = Router();
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user with the specified username
    // const user = users.find(u => u.username === username);
    const acc: IAccount | null = await accountService.getByUserName(username);

    console.log('username, password, acc ', req.body, acc);
    if (!acc) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    let user: IUser | ITrainer | null;
    if (acc.power === 'trainer') {
      user = await findTrainerByAccountID(acc._id.toString());
    }
    if (acc.power === 'customer') {
      user = await usersService.findUserByEmail(acc.username);
    }

    // Compare the password hash to the submitted password
    bcrypt.compare(password, acc.password, (err, result) => {
      if (err) {
        return res.status(500).json({ message: 'Internal server error' });
      }
      if (!result) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }

      const token = jwt.sign({ userId: acc._id }, secretKey, {
        expiresIn: '1h',
      });
      res.json({
        name: user?.fullName,
        userid: acc._id,
        email: acc.username,
        signature: 'user.signature',
        introduction: 'user.introduction',
        title: 'user.title',
        token,
        power: acc.power,
        profile: acc.profile,
      });
    });
  } catch (err) {}
};
export const logout = async (req, res, next) => {
  try {
  } catch (err) {}
};

export const register = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if account with the same username already exists
    const existingAccount = await accountService.getByUserName(username);
    if (existingAccount) {
      return res.json({ code: 2, data: undefined, message: 'Email is invalid or already taken' });
    }

    // Hash the password before saving to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new account using the accountSchema model
    const newAccount = await accountService.create({
      username,
      password: hashedPassword,
    });

    const newUserInfo = await usersService.createUser({
      email: username,
      gender: '',
      phone: '',
      account: newAccount._id,
      avatar: 'https://bootdey.com/img/Content/avatar/avatar7.png',
    });
    const result = {
      data: { acc: newAccount, profile: newUserInfo },
      code: 1,
      message: 'Account created successfully',
    };
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const changePass = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;
  const resetToken = await ResetToken.findOne({ token });
  if (!resetToken || resetToken.expired) {
    return res.status(400).send('Invalid or expired reset token');
  }
  const user = await AccountsModel.findOne({ email: resetToken.email });
  user.password = await bcrypt.hash(password, 10);
  await user.save();
  resetToken.expired = true;
  await resetToken.save();
  res.send('Password reset successfully');
};

export const resetpass = async (req, res) => {
  const { username, password } = req.body;

  // Check if account with the same username already exists
  const existingAccount = await accountService.getByUserName(username);
  if (!existingAccount) {
    return res.status(400).send('No user with that email address');
  }
  const token = crypto.randomBytes(20).toString('hex');
  const resetToken = new ResetToken({ email: username, token });
  await resetToken.save();
  const resetLink = `http://localhost:5174/reset-password?token=${token}`;

  await sendMailResetPass({
    email: existingAccount.username,
    name: 'cusNameXXX',
    url: resetLink,
  })
    .then(() => res.send('Password reset email sent successfully'))
    .catch((e) => {
      console.log(e);
      res.send('Password reset failed');
    });

  // return res.status(200).json({ message: 'Your request have been sent to email' });
};
router.post('/login', login);
router.post('/logout', logout);
router.post('/register', register);
router.post('/resetpass', resetpass);
router.post('/reset-password/:token', changePass);

export default router;
