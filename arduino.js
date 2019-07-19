var five = require("johnny-five");
var board = new five.Board({port:'COM3'});

board.on("ready", function () {
    console.log('BRUH THE BOARD IS READY');
    var led = new five.Led(12);
    led.blink(1500);

    this.repl.inject({ led });
});