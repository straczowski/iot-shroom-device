var gpio = require('rpi-gpio');
 
var pin   = 11;
var delay = 200;
var count = 0;
var max   = 50;
 
gpio.setup(pin, gpio.DIR_OUT, on);
 
function on() {
    if (count >= max) {
        gpio.destroy(function() {
            console.log('Closed pins, now exit');
        });
        return;
    }
 
    setTimeout(function() {
        gpio.write(pin, 1, off);
        count += 1;
    }, delay);
}
 
function off() {
    setTimeout(function() {
        gpio.write(pin, 0, on);
    }, delay);
}