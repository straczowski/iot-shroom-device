var gpio = require('rpi-gpio');
 
gpio.setup(11, gpio.DIR_OUT, writeEleven);
 
function writeEleven() {
    gpio.write(11, true, function(err) {
        if (err) throw err;
        console.log('Written to pin 11');
    });
}


gpio.setup(1, gpio.DIR_OUT, writeOne);
 
function writeOne() {
    gpio.write(1, true, function(err) {
        if (err) throw err;
        console.log('Written to pin 1');
    });
}