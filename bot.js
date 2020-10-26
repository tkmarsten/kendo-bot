const Discord = require('discord.js');
const bot = new Discord.Client();
const { prefix } = require('./config.json');

bot.on('ready', () => {
    console.log(`${bot.user.tag} is online.`);
});

bot.login(process.env.token);

bot.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'args') {
        if (!args.length) {
            return message.channel.send(`You have not input any arguments, ${message.author}!`);
        }
    }
    if (message.content === `${prefix}server`) {
        message.channel.send(`Server name: ${message.guild.name}`);
    }
});