import TelegramBot from "node-telegram-bot-api"
import process from "process";
import handler from "../modules/chatbotTelegram/botOneMessageMandler"
// Replace YOUR_TOKEN with your actual token from BotFather
const TelegramBotToken = "6014319968:AAF4EUvDWwLUaCfmPvgw_msGHE7iUQHrinE";
const commands = [
    // { command: 'start', description: 'Start the bot' },
    {command: 'lichtap', description: 'Xem Lich Tap'},
    {command: 'help', description: 'Get help'},
    {
        command: 'weather',
        description: 'Get the weather for a location',
        options: [{name: 'location', description: 'The location to get the weather for'}]
    },
];
const gameName = 'YOUR_TELEGRAM_GAMENAME';

const inlineKeyboard = {
    inline_keyboard: [
        [
            {text: 'hom nay', callback_data: 'hom nay'},
            {text: 'tuan nay', callback_data: 'tuan nay'},
        ]
    ]
};

export const StarBot = (app) => {
    const bot = new TelegramBot(process.env.TelegramBotToken, {polling: true});
    bot.setMyCommands(commands);
    bot.on('message', (msg) => {
        const user = msg.from;
        const userChatID = msg.chat.id;
        console.log(`User ${user.first_name} ${user.last_name} (@${user.username}, ${userChatID}) used the bot.`);
    });

    bot.on('message', (msg) => {
        const chatId = msg.chat.id;
        // const message = handler(chatId)
        // bot.sendMessage(chatId, message );
        if (msg.text.startsWith('/weather')) {
            const location = msg.text.split(' ')[1];
            if (location) {
                // Get the weather for the specified location
                // ...
            } else {
                bot.sendMessage(msg.chat.id, 'Please specify a location.');
            }
        }
        if (msg.text === '/lichtap') {
            bot.sendMessage(msg.chat.id, 'Do you like pizza?', {reply_markup: inlineKeyboard});
        }
    });
    bot.on('callback_query', (query) => {
        if (query.data === 'hom nay') {
            bot.answerCallbackQuery(query.id, {text: 'hom nay ban khong co lich tap!'});
        } else if (query.data === 'tuan nay') {
            //bot.answerCallbackQuery(query.id, {text:'thay la lich tap tuan nay'});
            // bot.answerCallbackQuery(query.id, {text:'thay la lich tap tuan nay'});
            bot.answerCallbackQuery(query.id, {url: "https://www.google.com/"});
        }
    });

    bot.onText(/\/start/, function onPhotoText(msg) {
        bot.sendMessage(msg.chat.id, `msg.chat.id: ${msg.chat.id}`);
    });

    app.get('test/form', (req, res) => {
        try {
            const data = {};

            res.render('formv1', data, (err, html) => {
                if (err) {
                    console.log(err);
                    return res.status(500).send('Internal Server Error');
                }

                bot.sendMessage(1157271088, html, {parse_mode: 'HTML'});
                res.send('Form sent to customer!');
            });
        } catch (e) {

        }

    });
}