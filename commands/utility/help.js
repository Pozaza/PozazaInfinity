const { MessageEmbed } = require('discord.js');
const Command = require('../../structures/Command');
module.exports = class Help extends Command {
  constructor(bot) {
    super(bot);
    this.cmd = 'help';
    this.aliases = ['h', 'хелп', 'помощь'];
    this.needGuild = true;
  }

  async run(msg) {
    if (msg.author.bot) return;
    msg.delete({ timeout: 2000 });
    const HelpMenu = new MessageEmbed()
      .setColor('#71c7ec')
      .setTitle('💠 **Меню помощи**')
      .setTimestamp()
      .setFooter(msg.author.username, msg.author.avatarURL({ dynamic: true }))
      .setDescription('__Список команд:__\n`ihelp` *<h/хелп/помощь>* (все) - **вызывает данное меню**.\n\n\n`ido` *<d/command/execute>* (могут использовать модераторы и выше) - **наказывает пользователя за указанное модератором правило**.\n\nИспользование - ido [пользователь] [номер правила]\n\n\n`ireport` *<r/rep/alert>* (все, кроме <@&920657126341361724>) - **кидает репорт на пользователя, указанного в сообщении**.\n\nИспользование - ireport [пользователь] [описание нарушения]');
    msg.channel.send(HelpMenu).then(msge => {
      msge.delete({ timeout: 30000 })
    });
  }
};
