var msg = "Hello, world!"
console.log(msg);

var TelegramBot = require('node-telegram-bot-api');

// Устанавливаем токен, который выдавал нам бот.
var token = '656336982:AAEN9CazxfCX091eNkLwXb2GMCR2dpG8j_g';
// Включить опрос сервера
var bot = new TelegramBot(token, {polling: true});

// Написать мне ... (/echo Hello World! - пришлет сообщение с этим приветствием.)
bot.onText(/echo (.+)/, function (msg, match) {
    var fromId = msg.from.id;
    var resp = match[1];
    bot.sendMessage(fromId, resp);
});

// Простая команда без параметров.
bot.on('message', function (msg) {
    var chatId = msg.chat.id;
    // Фотография может быть: путь к файлу, поток(stream) или параметр file_id
    var photo = 'testimage.png';
    bot.sendPhoto(chatId, photo, {caption: 'Милые котята'});
});