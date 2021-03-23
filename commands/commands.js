const Discord = require('discord.js');
const { prefix } = require('../config.json');

module.exports = {
    name: 'commands',

    execute(message, args) {
        const data = [];
        const { commands } = message.client;

        if (!args.length) {
            const embed = new Discord.MessageEmbed()
                .setColor('#55aac9')
                .setTitle('Bot Commands')
                .addFields(
                    { name: 'Commands', value: commands.map(command => command.name).join(', ') },
                );

            data.push('here\'s a list of all my commands:');
            //data.push(commands.map(command => command.name).join(', '));
            //data.push(`\nYou can send \`${prefix}commands [command name]\` to get info on a specific command!`);

            message.reply(data);
            message.channel.send(embed);
        }

        const name = args[0].toLowerCase();
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

        if (!command) {
            return message.reply('That\'s not a valid command!');
        }

        data.push(`Name: ${command.name}`);

        if (command.aliases) data.push(`Aliases: ${command.aliases.join(', ')}`);
        if (command.description) data.push(`Description: ${command.description}`);

        message.channel.send(data, { split: true });
    },
};