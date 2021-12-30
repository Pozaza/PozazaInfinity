const AmeBot = require('./structures/AmeBot');
const express = require("express")
const app = express()
const ameBot = new AmeBot();
const {inspect} = require('util');

process.on('unhandledRejection', (reason, promise) => {
    ameBot.log.error(
      `Unhandled Rejection at: ${inspect(promise)} reason: ${inspect(reason)}`
    );
  })
  .on('uncaughtException', (err, origin) => {
    ameBot.log.error(`Error: ${inspect(err)} at ${inspect(origin)}`);
});

app.get("/", (req, res) => {
res.send("hello hell!")
})

app.listen(3000, () => {
console.log("project ready!")
})