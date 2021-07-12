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

room.onPlayerChat = function (player, message) {
    emit("message", player, message) //Emitting custom events with haxball.js
}

room.onPlayerJoin = function (player) {
    emit("join", player) //Emitting custom events with haxball.js
}