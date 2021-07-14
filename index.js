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

    //Example auth
    let password = "1234" // ex. your value fetched from mongodb

    room.send("login", player.name, password) // send the values to the client
});

room.on("error", (error) => {
    console.log(error)
});

room.on("console", (log) => {
    console.log(log)
});

room.create("TOKEN")