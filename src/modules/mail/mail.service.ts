import MailComposer from 'nodemailer/lib/mail-composer';
import {google} from 'googleapis';

const fs = require('fs').promises;
const path = require('path');

const {OAuth2} = google.auth
/*const OAUTH_PLAYGROUND = 'https://developers.google.com/oauthplayground'
const SCOPES = ['https://www.googleapis.com/auth/gmail.send'];
const CREDENTIALS_PATH = path.join(process.cwd(), 'credentials.json');
const TOKEN_PATH = path.join(process.cwd(), '/src/modules/mail/token.json');

*/
const {MAILING_SERVICE_CLIENT_ID, GOOGLE_SECRET, GOOGLE_REFRESH_TOKEN, SENDER_EMAIL_ADDRESS} = process.env

const CLIENT_ID = MAILING_SERVICE_CLIENT_ID;
const CLIENT_SECRET = GOOGLE_SECRET;
const REFRESH_TOKEN = GOOGLE_REFRESH_TOKEN;
const EMAIL_ADDRESS = SENDER_EMAIL_ADDRESS;

const getGmailService = () => {
    const oAuth2Client = new google.auth.OAuth2(
        CLIENT_ID,
        CLIENT_SECRET
    );
    oAuth2Client.setCredentials({
        refresh_token: REFRESH_TOKEN
    });
    const gmail = google.gmail({version: 'v1', auth: oAuth2Client});
    return gmail;
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

/*
async function loadSavedCredentialsIfExist() {
    try {
        const content = await fs.readFile(TOKEN_PATH);
        const credentials = JSON.parse(content);
        return google.auth.fromJSON(credentials);
    } catch (err) {
        return null;
    }
}
async function authorize() {
    let client = await loadSavedCredentialsIfExist();
    if (client) {
        return client;
    }
    client = await authenticate({
        scopes: SCOPES,
        keyfilePath: CREDENTIALS_PATH,
    });
    if (client.credentials) {
        await saveCredentials(client);
    }
    return client;
}

async function saveCredentials(client) {
    const content = await fs.readFile(CREDENTIALS_PATH);
    const keys = JSON.parse(content);
    const key = keys.installed || keys.web;
    const payload = JSON.stringify({
        type: 'authorized_user',
        client_id: key.client_id,
        client_secret: key.client_secret,
        refresh_token: client.credentials.refresh_token,
    });
    await fs.writeFile(TOKEN_PATH, payload);
}
*/
// send mail
/*
const sendMail2 =(oauth2Client)=> async () => {
    const to = 'secoder79@gmail.com';
    const url = 'test.com';
    const txt = "testtttt";
    const content = await fs.readFile(TOKEN_PATH);
    const credentials = JSON.parse(content);
    const oauth2Client = await google.auth.fromJSON(credentials)

    const accessToken =  oauth2Client.getAccessToken()
    console.log("accessToken",accessToken)
    const smtpTransport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: 'secoder39@gmail.com',
            clientId: MAILING_SERVICE_CLIENT_ID,
            clientSecret: GOOGLE_SECRET,
            refreshToken: GOOGLE_REFRESH_TOKEN,
            accessToken:accessToken,
        },
    })
    console.log("smtpTransport",smtpTransport)
    const mailOptions = {
        from: SENDER_EMAIL_ADDRESS,
        to: to,
        subject: '[FE Certification Application] Reset Your Password!',
        html: `
            <div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
            <h2 style="text-align: center; text-transform: uppercase;color: teal;">Welcome to FE Application</h2>.</h2>
            <p>Congratulations! You're almost set to start using our platform.
                Just click the button below to validate your email address.
            </p>

            <a href=${url} style="background: crimson; text-decoration: none; color: white; padding: 10px 20px; margin: 10px 0; display: inline-block;">${txt}</a>

            <p>If the button doesn't work for any reason, you can also click on the link below:</p>

            <div>${url}</div>
            </div>
        `,
    }


}*/

export {
    sendMail
}
