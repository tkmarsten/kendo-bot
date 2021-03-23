const Discord = require('discord.js');

module.exports = {
    name: 'server',
    description: 'Display server information',

    execute(message, args) {
        const embed = new Discord.MessageEmbed()
            .setColor('#55aac9')
            .setTitle('Server Information')
            .setThumbnail(message.guild.iconURL())
            .addFields(
                { name: 'Name', value: `${message.guild.name}` },
                { name: 'Manager', value: `${message.guild.owner.user.tag}` },
                { name: 'Members', value: `${message.guild.memberCount}` },
            );

        message.channel.send(embed);
    },
};