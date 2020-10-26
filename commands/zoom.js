const Discord = require('discord.js');

module.exports = {
    name: 'zoom',
    description: 'Zoom practice information',

    execute(message, args) {
        const zoom = new Discord.MessageEmbed()
            .setColor('#55aac9')
            .setTitle('Zoom Practice')
            .addFields(
                { name: 'Days', value: 'Wednesday, Friday', inline: true },
                { name: 'Time', value: '7-8pm PST', inline: true },
                { name: 'Link', value: 'https://washington.zoom.us/j/93417649586' },
            );

        message.channel.send(zoom);
    },
};