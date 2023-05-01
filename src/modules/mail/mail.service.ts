import MailComposer from 'nodemailer/lib/mail-composer';
import {google} from 'googleapis';

const credentials = require('./credentials.json');
const tokens = require('./token.json');
//https://developers.google.com/oauthplayground

const { SENDER_EMAIL_ADDRESS} = process.env

const EMAIL_ADDRESS = SENDER_EMAIL_ADDRESS;

const getGmailService = () => {
    const { client_secret, client_id, redirect_uris } = credentials.web;
    const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
    oAuth2Client.setCredentials({
         refresh_token: tokens.refresh_token
     });
    return google.gmail({version: 'v1', auth: oAuth2Client});
};

const encodeMessage = (message) => Buffer.from(message).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

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
                raw: rawMessage
            }
        });
        console.log('sended', res.data);
        return res.data;
    } catch (error) {
        console.error(error);
    }
};

export {
    sendMail
}
