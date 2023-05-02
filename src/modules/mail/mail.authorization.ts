/*
https://www.labnol.org/google-api-service-account-220405
https://console.cloud.google.com/apis/dashboard?authuser=1&project=pt-booking-378508
 */
const { google } = require('googleapis');
const path = require('path');
const credentials = require('./credentials.json');
const open = require('open');

const fs = require('fs');
export const AuthorizeGmail = async () => {
  const { client_id, client_secret, redirect_uris } = credentials.web;
  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

  const GMAIL_SCOPES = ['https://www.googleapis.com/auth/gmail.send'];

  const url = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    prompt: 'consent',
    scope: GMAIL_SCOPES,
  });
  if (url) await open(url);
  console.log('Authorize this app by visiting this url:', url);
};

export const SaveTokenGMail = (ggcode) => {
  const { client_secret, client_id, redirect_uris } = credentials.web;
  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

  oAuth2Client.getToken(ggcode).then(({ tokens }) => {
    const tokenPath = path.join(__dirname, 'token.json');
    console.log('tokens', tokens);
    fs.writeFileSync(tokenPath, JSON.stringify(tokens));
    console.log('Access token and refresh token stored to token.json');
  });
};
// flow gmail sender
/*
step1: dang ki credentical
step2: cung cap credentical qua router post/credentical
        {client_secret, client_id, redirect_uris}
        // redirect_uris la router gg call de cung cap code cho system
step3:
        update MAILING_SERVICE_CLIENT_ID, GOOGLE_SECRET, GOOGLE_REFRESH_TOKEN lai neu mat
Step4: dung mail service bt
//Todo: hoan thien gmail service
// 1 router nhap credential 3 thuoc tinh
// nhap xong se tien hanh authentication de cap quyen send mail
// co quyen send mail se luu lai token quyen
// dung await google.auth.fromJSON(token) de authen lai moi lan gui mail?
*/
