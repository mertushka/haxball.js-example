const HaxballJS = require("haxball.js"),
  CommandHandler = require("./structures/CommandHandler"),
  EventHandler = require("./structures/EventHandler"),
  GameHandler = require("./structures/GameHandler"),
  config = require("./config.json");

HaxballJS.then((HBInit) => {
  const room = HBInit({
    roomName: "Haxball.JS",
    maxPlayers: 16,
    public: true,
    noPlayer: true,
    token: config.token,
  });

  room.gameHandler = new GameHandler(room);
  room.gameHandler.start();

  new CommandHandler(room).start();
  new EventHandler(room).start();
});
