const Discord = require('discord.js');
const { prefix } = require('../config.json');

module.exports = {
    name: 'help',

    execute(message, args) {
        const botInfo = new Discord.MessageEmbed()
            .setColor('#55aac9')
            .setTitle('Bot Information')
            .setDescription('Bot Senpai, Hanshi 8 Dan')
            .addFields(
                { name: 'Creator', value: 'Tiarnan' },
                { name: 'Prefix', value: `${prefix}` },
            );

        message.channel.send(botInfo);
    },
};