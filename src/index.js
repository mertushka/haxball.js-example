const HaxballJS = require("haxball.js"),
  CommandHandler = require("./structures/CommandHandler"),
  EventHandler = require("./structures/EventHandler");

const room = new HaxballJS.Room({
  roomName: "Haxball.JS",
  playerName: "Haxball.JS",
  maxPlayers: 16,
  public: true,
  token: "TOKEN",
});

const command = new CommandHandler(room);
const event = new EventHandler(room);

room.create();
command.start();
event.start();
