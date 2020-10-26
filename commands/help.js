const Discord = require('discord.js');
const { prefix } = require('../config.json');

module.exports = {
    name: 'help',
    description: 'Bot information',

    execute(message, args) {
        const botInfo = new Discord.MessageEmbed()
            .setColor('#55aac9')
            .setTitle('Bot Information')
            .setDescription('Learn about Bot Senpai')
            .addFields(
                { name: 'Prefix', value: `${prefix}` },
                { name: 'Commands', value: 'server' },
            );

        message.channel.send(botInfo);
    },
};