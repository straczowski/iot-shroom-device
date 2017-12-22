var gpio = require("gpio");
 
// Calling export with a pin number will export that header and return a gpio header instance 
var gpio4 = gpio.export(11, {
   // When you export a pin, the default direction is out. This allows you to set 
   // the pin value to either LOW or HIGH (3.3V) from your program. 
   direction: 'out',
 
   // set the time interval (ms) between each read when watching for value changes 
   // note: this is default to 100, setting value too low will cause high CPU usage 
   // interval: 200,
 
   // Due to the asynchronous nature of exporting a header, you may not be able to 
   // read or write to the header right away. Place your logic in this ready 
   // function to guarantee everything will get fired properly 
   ready: function() {
      console.log("ready function exec");
   }
});