/* eslint-disable brace-style */
const Discord = require('discord.js');
const fs = require('fs');
const { prefix } = require('./config.json');

const bot = new Discord.Client();
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);
}

bot.on('ready', () => {
    console.log(`${bot.user.tag} is online.`);
    bot.user.setActivity('Type $help to learn about me!');
});

bot.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (!bot.commands.has(commandName)) return;

    const command = bot.commands.get(commandName);

    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('There was an error executing that command!');
    }

    if (message.channel.type === 'dm') {
        return message.reply('I cannot execute commands inside DMs.');
    }
});

bot.login(process.env.token);