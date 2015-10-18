
var weatherApp = require('./weather_app');

var zipCodes = process.argv.slice(2);

weatherApp.weatherForZipCodes(zipCodes, function (weatherData) {
  var temp = weatherData.main.temp;
  console.log("Current Temperature for " + weatherData.name + ": " + temp);
});
