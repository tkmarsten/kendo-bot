const Discord = require('discord.js');
const { prefix } = require('../config.json');
const { color } = require('../config.json')

module.exports = {
    name: 'help',

    execute(message, args) {
        const embed = new Discord.MessageEmbed()
            .setColor(color)
            .setTitle('Bot Information')
            .setDescription('Bot Senpai, Hanshi 8 Dan')
            .addFields(
                { name: 'Creator', value: 'Tiarnan' },
                { name: 'Prefix', value: `${prefix}` },
                { name: 'Commands', value: `Type \`${prefix}commands\` for a list of commands` },
            );

        message.channel.send(embed);
    },
};