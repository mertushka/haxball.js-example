const Room = require("haxball.js")
const room = new Room("room.js")

//Default Event
room.once("ready", () => {
    console.log(room.link)
});

room.on("message", (player, message) => {
    console.log(`${player.name}: ${message}`)
});

room.on("join", (player) => {
    console.log(`${player.name} joined the room!`)
});

room.on("error", (error) => {
    console.log(error)
});

room.create("TOKEN")