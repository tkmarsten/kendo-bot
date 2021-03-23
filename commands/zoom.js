const Discord = require('discord.js');
const { color } = require('../config.json')

module.exports = {
    name: 'zoom',
    description: 'Zoom practice information',

    execute(message, args) {
        const embed = new Discord.MessageEmbed()
            .setColor(color)
            .setTitle('Zoom Practice')
            .addFields(
                { name: 'Days', value: 'Wednesday, Friday', inline: true },
                { name: 'Time', value: '7-8pm PST', inline: true },
                { name: 'Link', value: 'https://washington.zoom.us/j/93417649586?pwd=TENzNjdUNGxqVWhnemZSRFhxY1Ntdz09' },
            );

        message.channel.send(embed);
    },
};