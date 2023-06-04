import { Request, Response, Router } from 'express';
import { AuthorizeGmail, SaveTokenGMail } from './mail.authorization';
import { sendMail } from './mail.service';
const router = Router();

router.get('/auth', (req: Request, res: Response) => {
  AuthorizeGmail().then((e) => {
    console.log('AuthorizeGmail', e);
    res.status(200).send('okey');
  });
});
router.get('/auth/google/callback', (req: Request, res: Response) => {
  console.log('req.params', req.params);
  console.log('req.query', req.query);
  const { code } = req.query;

  if (code) SaveTokenGMail(code, res);
});
router.get('/send-mail', async (req: Request, res: Response) => {
  const options = {
    to: 'secoder79@gmail.com',
    cc: '',
    replyTo: '',
    subject: 'Hello Coder79 🚀',
    text: 'This email is sent from the command line',
    html: `<p>🙋🏻‍♀️  &mdash; This is a <b>test email</b> from <a href="https://digitalinspiration.com">Digital Inspiration</a>.</p>`,
    attachments: '',
    textEncoding: 'base64',
    headers: [
      { key: 'X-Application-Developer', value: 'Amit Agarwal' },
      { key: 'X-Application-Version', value: 'v1.0.0.2' },
    ],
  };
  await sendMail(options)
    .then(() => res.status(200).send('email sended'))
    .catch((e) => {
      res.status(400).send('error send mail');
      console.log('error send mail', e);
    });
});

router.get('/recover-pass', async (req: Request, res: Response) => {
  console.log('req.query', req.query);
  res.status(200).json(req.query);
});

router.get('/confirm-booking', async (req: Request, res: Response) => {
  console.log('req.query', req.query);
  const { name, email, bookingDate } = req.query;
  if (!name || !email || !bookingDate) {
    res.status(400).send('error send mail');
    return;
  }
  const options = {
    to: email,
    cc: '',
    replyTo: '',
    subject: 'Booking Confirmation',
    text: `Dear ${name},\n\nYour booking on ${bookingDate} has been confirmed.`,
    html: `<p>Dear ${name},</p><p>Your booking on ${bookingDate} has been confirmed.</p>`,
    attachments: '',
    textEncoding: 'base64',
    headers: [
      { key: 'X-Application-Developer', value: 'Amit Agarwal' },
      { key: 'X-Application-Version', value: 'v1.0.0.2' },
    ],
  };
  await sendMail(options)
    .then(() => res.status(200).send('email sended'))
    .catch((e) => {
      res.status(400).send('error send mail');
      console.log('error send mail', e);
    });
  res.status(200).json(req.query);
});
export default router;
