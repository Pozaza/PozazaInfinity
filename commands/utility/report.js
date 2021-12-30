const { MessageEmbed } = require('discord.js');
const Command = require('../../structures/Command');
const { MessageButton } = require('discord-buttons');

module.exports = class Report extends Command {
  constructor(bot) {
    super(bot);
    this.cmd = 'report';
    this.aliases = ['r', 'rep', 'alert'];
    this.needGuild = true;
  }

  async run(msg) {
    msg.delete({ timeout: 5000 });
    const done = new MessageButton()
      .setLabel("Убрать")
      .setStyle("gray")
      .setEmoji('🗑️')
      .setID('d');
    if (msg.author.bot) return;
    if (!msg.mentions.members.first()) {
      const WarningEmbed = new MessageEmbed()
        .setColor('#ffff00')
        .setTitle('⚠️ **Ошибка**')
        .setTimestamp()
        .setFooter(msg.author.username, msg.author.avatarURL({ dynamic: true }))
        .setDescription(`Сначало **укажи пользователя!**`);
      msg.channel.send(WarningEmbed).then(msge => {
        msge.delete({ timeout: 10000 })
      });
      return
    }
    const target = msg.mentions.members.first();
    if (target.user.id == msg.author.id) {
      const WarningEmbed = new MessageEmbed()
        .setColor('#ffff00')
        .setTitle('⚠️ **Ошибка**')
        .setTimestamp()
        .setFooter(msg.author.username, msg.author.avatarURL({ dynamic: true }))
        .setDescription(`Ты хочешь **кинуть репорт на себя**? 🤨`);
      msg.channel.send(WarningEmbed).then(msge => {
        msge.delete({ timeout: 10000 })
      });
      return
    }

    let memberRole = msg.guild.roles.cache.get('741240779523096617');
    let muteRole = msg.guild.roles.cache.get('885832050303721482');
    let reportRestriction = msg.guild.roles.cache.get('920657126341361724');
    if (msg.member.roles.cache.some(role => role == memberRole) && !msg.member.roles.cache.some(role => role == muteRole) && !msg.member.roles.cache.some(role => role == reportRestriction)) {
      msg.channel.send(`✅ ${msg.author}, **репорт успешно отправлен!**`).then(msge => {
          msge.delete({ timeout: 10000 })
        });
      const channel = msg.client.channels.cache.get('920656044915560498');
      const args = msg.content.split(" ");
      const reportMessage = args.slice(2);
      const repMes = reportMessage.join(' ');
      const ReportEmbed = new MessageEmbed()
        .setColor('#ff1100')
        .setTitle('🔴 **Новый репорт!**')
        .setTimestamp()
        .setThumbnail(target.user.displayAvatarURL({
          dynamic: true,
        }))
        .setFooter(msg.author.username, msg.author.avatarURL({ dynamic: true }))
        .setDescription(`**От**: ${msg.author}\n\n__Репорт на:__ ${target}\n\n__**Причина репорта:**__ ` + '`' + repMes + '`');
      channel.send(ReportEmbed, done)
    } else {
      if (msg.member.roles.cache.some(role => role == reportRestriction)) {
        const ErrorEmbed = new MessageEmbed()
          .setColor('#ff1100')
          .setTitle('⛔ **Запрещено!**')
          .setTimestamp()
          .setFooter(msg.author.username, msg.author.avatarURL({ dynamic: true }))
          .setDescription(`Вам запрещено отправлять репорты.`);
        msg.channel.send(ErrorEmbed).then(msge => {
          msge.delete({ timeout: 10000 })
        });
        return;
      } else {
        const ErrorEmbed = new MessageEmbed()
          .setColor('#ffff00')
          .setTitle('⚠️ **Недостаточно прав!**')
          .setTimestamp()
          .setFooter(msg.author.username, msg.author.avatarURL({ dynamic: true }))
          .setDescription(`У вас недостаточно прав для выполнения данной команды.`);
        msg.channel.send(ErrorEmbed).then(msge => {
          msge.delete({ timeout: 10000 })
        });
        return;
      }
    }
  }
};
