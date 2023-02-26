// auth.js
//https://www.labnol.org/google-api-service-account-220405
/*
https://www.labnol.org/google-api-service-account-220405
https://console.cloud.google.com/apis/dashboard?authuser=1&project=pt-booking-378508
 */
/*import {google} from 'googleapis';
import path from 'path';*/
const {google} = require('googleapis');
const path = require('path');
const credentials = require('./credentials.json')
const open = require('open');

/*const CREDENTIALS_PATH = path.join(process.cwd(), '/src/modules/mail/credentials.json');
const TOKEN_PATH = path.join(process.cwd(), '/src/modules/mail/token.json');*/
const fs = require('fs');


/*async function loadSavedCredentialsIfExist() {
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
}*/
export const AuthorizeGmail = async () => {
    /*    console.log("CREDENTIALS_PATH",CREDENTIALS_PATH)
        const content = await fs.readFile(CREDENTIALS_PATH);
        const credentials = JSON.parse(content);*/

    const {client_secret, client_id, redirect_uris} = credentials.web;
    const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

    const GMAIL_SCOPES = ['https://www.googleapis.com/auth/gmail.send'];

    const url = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        prompt: 'consent',
        scope: GMAIL_SCOPES,
    });
    if (url) await open(url);
    console.log('Authorize this app by visiting this url:', url);
}

export const SaveTokenGMail = (ggcode) => {
    const {client_secret, client_id, redirect_uris} = credentials.web;
    const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

    oAuth2Client.getToken(ggcode).then(({tokens}) => {
        const tokenPath = path.join(__dirname, 'token.json');
        fs.writeFileSync(tokenPath, JSON.stringify(tokens));
        console.log('Access token and refresh token stored to token.json');
    });

}
// flow gmail sender
/*
step1: dang ki credentical
step2: cung cap credentical qua router post/credentical
        {client_secret, client_id, redirect_uris}
        // redirect_uris la router gg call de cung cap code cho system
step3:
        update MAILING_SERVICE_CLIENT_ID, GOOGLE_SECRET, GOOGLE_REFRESH_TOKEN lai neu mat
Step4: dung mail service bt

*/