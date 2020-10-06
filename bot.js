const Discord = require('discord.js');
const bot = new Discord.Client();
const { prefix } = require('./config.json');

bot.on('ready', () => {
    console.log(`${bot.user.tag} is online.`);
});

bot.login(process.env.token);

bot.on('message', message => {
    if (message.content === `${prefix}server`) {
        message.channel.send(`Server name: ${message.guild.name}`);
    }
});