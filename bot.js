const Discord = require('discord.js');
const bot = new Discord.Client();
const { prefix } = require('./config.json');

const fs = require('fs');
bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

bot.on('ready', () => {
    console.log(`${bot.user.tag} is online.`);
});

bot.login(process.env.token);

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);
}


bot.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (!bot.commands.has(command)) return;
    try {
        bot.commands.get(command).execute(message, args);
    }
    catch (error) {
        console.error(error);
        message.reply('There was an error executing that command!');
    }
});