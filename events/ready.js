module.exports = class {
  /**
   * @constructor
   * @param {object} bot
   */
  constructor(bot) {
    this.bot = bot;
  }

  /**
   * @async
   * @method run
   */
  async run() {
    this.bot.prefixes.push(`<@!${this.bot.user.id}>`, `<@${this.bot.user.id}>`);
    this.bot.log.info(`${this.bot.user.username} ready !`);
    this.bot.setInterval(() => {
        this.bot.user.setActivity({ type: "PLAYING", name: `${this.bot.guilds.cache.size} сервера <ihelp>` })
    }, 60000)
  }
};
