import {Router} from 'express';
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
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

const users = [
    { id: 1, username: 'admin', password: '$2b$10$Y.0du4qroUxZRctUIwNjs.VTBz1BS98NJQ8UItyaxVXoFQEUlzLIm' } // password: "admin123"
];

const router = Router();
export const login = async (req, res)=> {
    try {
        const { username, password } = req.body;

        // Find the user with the specified username
        const user = users.find(u => u.username === username);
        console.log("username, password ",req.body )
        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // Compare the password hash to the submitted password
        bcrypt.compare(password, user.password, (err, result) => {
             if (err) {
                 return res.status(500).json({ message: 'Internal server error' });
             }
             if (!result) {
                 return res.status(401).json({ message: 'Invalid username or password' });
             }

            // Generate a JWT and send it back to the client
            const token = jwt.sign({userId: user.id}, secretKey, {expiresIn: '1h'});
            res.json({
                name: "admin",
                userid: "00000001",
                email: "admin@gmail.com",
                signature: "string",
                introduction: "string",
                title: "string",
                token: token,
                power: "admin",
            });
        });
    }
    catch (err) {

    }
};
export const logout = async (req, res, next) => {
    try {

    }
    catch (err) {

    }

};
router.post('/login', login);
router.post('/logout', logout);

export default router;
