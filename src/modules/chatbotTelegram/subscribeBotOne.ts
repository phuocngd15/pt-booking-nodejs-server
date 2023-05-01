import express from 'express';
import qr from 'qr-image';

const botAPI = express.Router();
const { v4: uuidv4 } = require('uuid');
const bot_username='ptbookingbot';
botAPI.get('/subscribe', (req, res) => {
    // Step 1: Authenticate the user and get their account information
  //  const { userId, userName } = req.user; // Replace this with your actual authentication code

    // Step 2: Link the subscription code with the user's account
    const subscriptionCode = uuidv4();
    // Replace this with your actual code for storing the subscription code and linking it with the user's account

    // Step 3: Generate a QR code using the subscription code and the bot's username
    const qrCode = qr.image(`https://t.me/${bot_username}?start=${subscriptionCode}`, { type: 'png' });

    // Step 4: Convert the QR code image to a base64-encoded string
    const chunks = [];
    qrCode.on('data', (chunk) => chunks.push(chunk));
    qrCode.on('end', () => {
        const qrCodeBase64 = Buffer.concat(chunks).toString('base64');

        // Step 5: Return the base64-encoded QR code image to the user
        res.send({ subscriptionCode, qrCodeBase64 });
    });
});

export { botAPI };