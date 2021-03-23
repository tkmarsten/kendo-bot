const Discord = require('discord.js');
const { color } = require('../config.json')

module.exports = {
    name: 'contact',

    execute(message, args) {
        const embed = new Discord.MessageEmbed()
            .setColor(color)
            .setTitle('Contact Us!')
            .addFields(
                { name: 'Email', value: 'uwashington.kendo@gmail.com' },
                { name: 'Facebook', value: 'https://www.facebook.com/uwkendoclub' },
                { name: 'Instagram', value: 'https://www.instagram.com/kendo_uw/' },
            );

        message.channel.send(embed);
    }
};