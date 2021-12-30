const {Client, Collection} = require('discord.js');
const {join} = require('path');
const {readdirSync} = require('fs');
const AmeClient = require('amethyste-api');
const discord = require('discord.js');
const client = new discord.Client();
require('discord-buttons')(client);

class AmeBot extends Client {
  /**
   * @constructor
   * @param {object} option
   */
  constructor(option) {
    super(option);
    this.config = require('../config/config');
    this.commands = new Collection();
    this.aliases = new Collection();
    this.prefixes = this.config.prefix ? [this.config.prefix] : [];
    this.log = require('./utils/log');
    this.utils = require('./utils/MessageForm');
    this.initialize();
    this.ameAPI = new AmeClient(this.config.ameToken);
  }

  /**
   * Initialize the bot
   **/
  initialize() {
    this.loadCommands();
    this.loadEvents();
  }

  /**
   * Load commands
   */
  loadCommands() {
    const categories = readdirSync(join(__dirname, '../commands'));
    let totalCommands = 0;
    for (let i = 0; i < categories.length; i++) {
      const thisCommands = readdirSync(
        join(__dirname, '../commands', categories[i])
      );
      totalCommands = totalCommands + thisCommands.length;
      thisCommands.forEach(c => {
        try {
          let Command = require(join(
            __dirname,
            '../commands',
            categories[i],
            c
          ));
          if (!Command.help) {
            Command = new Command(this);
          }
          this.commands.set(Command.cmd, Command);
          Command.aliases.forEach(alias => {
            this.aliases.set(alias, Command.cmd);
          });
        } catch (err) {
          this.log.error(`Unable to load command ${c}: ${err.stack || err}`);
        }
      });
    }
    this.log.info(`Command ${this.commands.size}/${totalCommands} loading`);
  }

  loadEvents() {
    // Load events
    const events = readdirSync(join(__dirname, '../events'));
    let loadedEvents = 0;
    events.forEach(e => {
      try {
        const eventName = e.split('.')[0];
        const Event = require(join(__dirname, '../events', e));
        loadedEvents++;
        // create event with params
        this.on(eventName, (...args) => {
          new Event(this).run(...args);
        });
        delete require.cache[require.resolve(join(__dirname, '../events', e))];
      } catch (err) {
        this.log.error(`Failed to load event ${e}: ${err.stack || err}`);
      }
    });
    // token
    this.login(process.env['TOKEN']);
    // logged
    this.log.info(`Loaded ${loadedEvents}/${events.length} events`);
    process.on('unhandledRejection', err => this.log.error(err));
    process.on('uncaughtException', err => this.log.error(err));
  }
}

client.on('clickButton', async button => {
  if(!button.message.author === client.user) return;
  button.channel.send(`${button.clicker.user} убрал репорт`);
  button.message.delete();
});

client.login(process.env['TOKEN']);

module.exports = AmeBot;
