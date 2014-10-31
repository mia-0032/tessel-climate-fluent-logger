var tessel = require('tessel');
var climatelib = require('climate-si7020');
var fluent = require('fluent-logger-node');
var setting = require('./settings');

var led1 = tessel.led[0].output(1);

var climate = climatelib.use(tessel.port['A']);

climate.on('ready', function () {
  var logger = fluent.createLogger({
    host: setting.fluent.host,
    port: setting.fluent.port,
    tagPrefix: "tessel"
  });

  setInterval(function loop () {
    climate.readTemperature(function (err, temp) {
      climate.readHumidity(function (err, humid) {
        led1.toggle();
        logger.post("climate", {temp: temp, humid: humid});
        led1.toggle();
      });
    });
  }, 5000);
});

climate.on('error', function(err) {
  console.log('error connecting module', err);
});
