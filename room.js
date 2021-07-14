var room = HBInit({
    roomName: "Room powered by haxball.js",
    maxPlayers: 16,
    token: window.authToken, //Important, dont change!
    public: true,
    playerName: "Haxball.JS",
    geo: {"code": "TR", "lat" : 38.423734, "lon" : 27.142826}
});
			
room.setDefaultStadium("Big");
room.setScoreLimit(3);
room.setTimeLimit(3);
room.setTeamsLock(true);

// Custom function that will be triggered when .send() function called
onHaxballJSMessage = function (message) {
    switch (message[0]) {
        case 'login':
            let playerName = message[1];
            let password = message[2]
            console.log(`Player: ${playerName} Password: ${password}`)
            break;
    
        default:
            console.log("Invalid message!")
            break;
    }
}

room.onPlayerChat = function (player, message) {
    emit("message", player, message) //Emitting custom events with haxball.js
}

room.onPlayerJoin = function (player) {
    emit("join", player) //Emitting custom events with haxball.js
}