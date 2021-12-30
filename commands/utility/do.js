const Command = require('../../structures/Command');
const { MessageEmbed } = require('discord.js');
module.exports = class Do extends Command {
  constructor(bot) {
    super(bot);
    this.cmd = 'do';
    this.aliases = ['d', 'command', 'execute'];
    this.needGuild = true;
  }

  async run(msg) {
    if (msg.author.bot) return;
    const args = msg.content.trim().split(/ +/g);
    msg.delete({ timeout: 5000 });
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
        .setDescription(`Ты хочешь **наказать себя**? 🤨`);
      msg.channel.send(WarningEmbed).then(msge => {
        msge.delete({ timeout: 10000 })
      });
      return
    }

    let muteRole = msg.guild.roles.cache.get('885832050303721482');
    let moder = msg.guild.roles.cache.get('776849861123112980');

    if (!msg.member.roles.cache.some(role => role == moder)) {
      const ErrorEmbed = new MessageEmbed()
        .setColor('#ff1100')
        .setTitle('⛔ **Недостаточно прав!**')
        .setTimestamp()
        .setFooter(msg.author.username, msg.author.avatarURL({ dynamic: true }))
        .setDescription(`У вас недостаточно прав для выполнения данной команды.`);
      msg.channel.send(ErrorEmbed).then(msge => {
        msge.delete({ timeout: 10000 })
      });
      return;
    } else switch (args[2]) {
      case "1":
        target.setVoiceChannel(null);
        const SuccessEmbed = new MessageEmbed()
          .setColor('#00ff00')
          .setTitle('✅ **Успех**')
          .setTimestamp()
          .setThumbnail(target.user.displayAvatarURL({
            dynamic: true,
          }))
          .setFooter(msg.author.username, msg.author.avatarURL({ dynamic: true }))
          .setDescription(`${target} успешно **отключён от голосового канала**.`);
        msg.channel.send(SuccessEmbed).then(msge => {
          msge.delete({ timeout: 10000 })
        });
        break;
      case "2":
        target.roles.add(muteRole);
        setTimeout(async () => {
          target.roles.remove(muteRole)
        }, 300000);
        const SuccessEmbed2 = new MessageEmbed()
          .setColor('#00ff00')
          .setTitle('✅ **Успех**')
          .setTimestamp()
          .setThumbnail(target.user.displayAvatarURL({
            dynamic: true,
          }))
          .setFooter(msg.author.username, msg.author.avatarURL({ dynamic: true }))
          .setDescription(`${target} получил мут на ` + '`' + `5 мин.` + '`');
        msg.channel.send(SuccessEmbed2).then(msge => {
          msge.delete({ timeout: 10000 })
        });
        break;
      case "3":
        target.roles.add(muteRole);
        setTimeout(async () => {
          target.roles.remove(muteRole)
        }, 1800000);
        const SuccessEmbed3 = new MessageEmbed()
          .setColor('#00ff00')
          .setTitle('✅ **Успех**')
          .setTimestamp()
          .setThumbnail(target.user.displayAvatarURL({
            dynamic: true,
          }))
          .setFooter(msg.author.username, msg.author.avatarURL({ dynamic: true }))
          .setDescription(`${target} получил мут на ` + '`' + `30 мин.` + '`');
        msg.channel.send(SuccessEmbed3).then(msge => {
          msge.delete({ timeout: 10000 })
        });
        break;
      case "4":
        target.roles.add(muteRole);
        setTimeout(async () => {
          target.roles.remove(muteRole)
        }, 900000);
        const SuccessEmbed4 = new MessageEmbed()
          .setColor('#00ff00')
          .setTitle('✅ **Успех**')
          .setTimestamp()
          .setThumbnail(target.user.displayAvatarURL({
            dynamic: true,
          }))
          .setFooter(msg.author.username, msg.author.avatarURL({ dynamic: true }))
          .setDescription(`${target} получил мут на ` + '`' + `15 мин.` + '`');
        msg.channel.send(SuccessEmbed4).then(msge => {
          msge.delete({ timeout: 10000 })
        });
        break;
      case "5":
        target.roles.add(muteRole);
        setTimeout(async () => {
          target.roles.remove(muteRole)
        }, 1200000);
        const SuccessEmbed5 = new MessageEmbed()
          .setColor('#00ff00')
          .setTitle('✅ **Успех**')
          .setTimestamp()
          .setThumbnail(target.user.displayAvatarURL({
            dynamic: true,
          }))
          .setFooter(msg.author.username, msg.author.avatarURL({ dynamic: true }))
          .setDescription(`${target} получил мут на ` + '`' + `20 мин.` + '`');
        msg.channel.send(SuccessEmbed5).then(msge => {
          msge.delete({ timeout: 10000 })
        });
        break;
      case "6":
        const SuccessEmbed6 = new MessageEmbed()
          .setColor('#ffffff')
          .setTitle('❔ **Подсказка**')
          .setTimestamp()
          .setFooter(msg.author.username, msg.author.avatarURL({ dynamic: true }))
          .setDescription(`!warn ${target} **массовый пинг**`);
        msg.channel.send(SuccessEmbed6).then(msge => {
          msge.delete({ timeout: 10000 })
        });
        break;
      case "7":
        const SuccessEmbed7 = new MessageEmbed()
          .setColor('#ffffff')
          .setTitle('❔ **Подсказка**')
          .setTimestamp()
          .setFooter(msg.author.username, msg.author.avatarURL({ dynamic: true }))
          .setDescription(`!warn ${target} **споры на сомнительную тему**`);
        msg.channel.send(SuccessEmbed7).then(msge => {
          msge.delete({ timeout: 10000 })
        });
        break;
      case "8":
        target.roles.add(muteRole);
        setTimeout(async () => {
          target.roles.remove(muteRole)
        }, 300000);
        const SuccessEmbed8 = new MessageEmbed()
          .setColor('#00ff00')
          .setTitle('✅ **Успех**')
          .setTimestamp()
          .setThumbnail(target.user.displayAvatarURL({
            dynamic: true,
          }))
          .setFooter(msg.author.username, msg.author.avatarURL({ dynamic: true }))
          .setDescription(`${target} получил мут на ` + '`' + `5 мин.` + '`');
        msg.channel.send(SuccessEmbed8).then(msge => {
          msge.delete({ timeout: 10000 })
        });
        break;
      case "9":
        const SuccessEmbed9 = new MessageEmbed()
          .setColor('#00ff00')
          .setTitle('✅ **Успех**')
          .setTimestamp()
          .setThumbnail(target.user.displayAvatarURL({
            dynamic: true,
          }))
          .setFooter(msg.author.username, msg.author.avatarURL({ dynamic: true }))
          .setDescription(`(!warn ${target} **нарушение правил использования Дискорда**)`);
        msg.channel.send(SuccessEmbed9).then(msge => {
          msge.delete({ timeout: 10000 })
        });
        break;
      case "10":
        const SuccessEmbed10 = new MessageEmbed()
          .setColor('#00ff00')
          .setTitle('✅ **Успех**')
          .setTimestamp()
          .setThumbnail(target.user.displayAvatarURL({
            dynamic: true,
          }))
          .setFooter(msg.author.username, msg.author.avatarURL({ dynamic: true }))
          .setDescription(`${target} был успешно **забанен**`);
        msg.channel.send(SuccessEmbed10).then(msge => {
          msge.delete({ timeout: 10000 })
        });
        target.ban({ reason: 'Нарушение правила №10: Контент 18+ разрешён только в определённом канале.' })
        break;
      case "11":
        target.roles.add(muteRole);
        setTimeout(async () => {
          target.roles.remove(muteRole)
        }, 300000);
        const SuccessEmbed11 = new MessageEmbed()
          .setColor('#00ff00')
          .setTitle('✅ **Успех**')
          .setTimestamp()
          .setThumbnail(target.user.displayAvatarURL({
            dynamic: true,
          }))
          .setFooter(msg.author.username, msg.author.avatarURL({ dynamic: true }))
          .setDescription(`${target} получил мут на ` + '`' + `5 мин.` + '`');
        msg.channel.send(SuccessEmbed11).then(msge => {
          msge.delete({ timeout: 10000 })
        });
        break;
      case "12":
        target.roles.add(muteRole);
        setTimeout(async () => {
          target.roles.remove(muteRole)
        }, 1200000);
        const SuccessEmbed12 = new MessageEmbed()
          .setColor('#00ff00')
          .setTitle('✅ **Успех**')
          .setTimestamp()
          .setThumbnail(target.user.displayAvatarURL({
            dynamic: true,
          }))
          .setFooter(msg.author.username, msg.author.avatarURL({ dynamic: true }))
          .setDescription(`${target} получил мут на ` + '`' + `20 мин.` + '`');
        msg.channel.send(SuccessEmbed12).then(msge => {
          msge.delete({ timeout: 10000 })
        });
        break;
      case undefined:
        const WarningEmbed = new MessageEmbed()
          .setColor('#ffff00')
          .setTitle('⚠️ **Ошибка**')
          .setTimestamp()
          .setFooter(msg.author.username, msg.author.avatarURL({ dynamic: true }))
          .setDescription(`Ты не можешь наказать участника без указания номера правила.`);
        msg.channel.send(WarningEmbed).then(msge => {
          msge.delete({ timeout: 10000 })
        });
        break;
      case "":
        const WarningEmbed1 = new MessageEmbed()
          .setColor('#ffff00')
          .setTitle('⚠️ **Ошибка**')
          .setTimestamp()
          .setFooter(msg.author.username, msg.author.avatarURL({ dynamic: true }))
          .setDescription(`Ты не можешь наказать участника без указания номера правила.`);
        msg.channel.send(WarningEmbed1).then(msge => {
          msge.delete({ timeout: 10000 })
        });
        break;
      case " ":
        const WarningEmbed2 = new MessageEmbed()
          .setColor('#ffff00')
          .setTitle('⚠️ **Ошибка**')
          .setTimestamp()
          .setFooter(msg.author.username, msg.author.avatarURL({ dynamic: true }))
          .setDescription(`Ты не можешь наказать участника без указания номера правила.`);
        msg.channel.send(WarningEmbed2).then(msge => {
          msge.delete({ timeout: 10000 })
        });
        break;
    };
  }
};
