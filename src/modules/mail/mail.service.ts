import MailComposer from 'nodemailer/lib/mail-composer';
import { google } from 'googleapis';

const credentials = require('./credentials.json');
const tokens = require('./token.json');
//https://developers.google.com/oauthplayground

const { SENDER_EMAIL_ADDRESS } = process.env;

const EMAIL_ADDRESS = SENDER_EMAIL_ADDRESS;

const getGmailService = () => {
  const { client_secret, client_id, redirect_uris } = credentials.web;
  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
  oAuth2Client.setCredentials({
    refresh_token: tokens.refresh_token,
  });
  return google.gmail({ version: 'v1', auth: oAuth2Client });
};

const encodeMessage = (message) =>
  Buffer.from(message)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

const createMail = async (options) => {
  const mailComposer = new MailComposer(options);
  const message = await mailComposer.compile().build();
  return encodeMessage(message);
};
const sendMail = async (options) => {
  const gmail = getGmailService();
  const rawMessage = await createMail(options);
  try {
    const res = await gmail.users.messages.send({
      userId: EMAIL_ADDRESS,
      requestBody: {
        raw: rawMessage,
      },
    });
    console.log('sended', res.data);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
const sendConfirmBooking = async (props: { email: string; bookingDate: string; name: string }) => {
  const { email, bookingDate, name } = props;

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
      { key: 'X-Application-Developer', value: 'Your Name' },
      { key: 'X-Application-Version', value: 'v1.0.0' },
    ],
  };

  try {
    await sendMail(options);
    console.log('Booking confirmation email sent');
  } catch (err) {
    console.error('Error sending booking confirmation email:', err);
    throw err; // re-throw the error so the caller can handle it
  }
};


const sendMailResetPass = async (props: { email: string; url: string; name: string }) => {
  const { email, url, name } = props;

  const options = {
    to: email,
    cc: '',
    replyTo: '',
    subject: 'Reset password',
    text: `Dear ${name},\n\nClick on ${url} for change password.`,
    html: `<p>Dear ${name},</p><p>Click on ${url} for change password.</p>`,
    attachments: '',
    textEncoding: 'base64',
    headers: [
      { key: 'X-Application-Developer', value: 'Your Name' },
      { key: 'X-Application-Version', value: 'v1.0.0' },
    ],
  };

  try {
    await sendMail(options);
    console.log('Booking confirmation email sent');
  } catch (err) {
    console.error('Error sending booking confirmation email:', err);
    throw err; // re-throw the error so the caller can handle it
  }
};
export { sendMail, sendConfirmBooking ,sendMailResetPass};
