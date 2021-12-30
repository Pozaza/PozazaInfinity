module.exports = class {
  constructor(bot) {
    this.bot = bot;
  }
 run(guild) {
    const channel = guild.channels.cache.find(channel => channel.type === 'text' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))
      channel.send(`<:Pozaza_yay:849355690303815680> Спасибо что пригласил меня на свой сервер!\n<a:pazaza:838694465879015435> Если хочешь, можешь меня поддержать материально: https://www.donationalerts.com/r/pozaza\n<:wtf_is_going_on:806962452045889637> Или можешь меня поддержать морально: https://discord.gg/KwP76hS\n:partying_face: развлекайся)`)
  }
};
