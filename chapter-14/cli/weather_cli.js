
// Load our Weather App module from the weather_app.js file
var weatherApp = require('./weather');

/*
  Get the command line arguments which are stored in process.argv as
  an array. The 'slice' method on JS arrays returns the elements
  from the index provided to it. Since process.argv also contains the
  command (node) and the first argument (the filename), we only need
  the arguments following (the ZIP codes)
 */
var zipCodes = process.argv.slice(2);

/*
  Invoke our weatherForZipCodes function with the ZIP codes we were
  provided with and print them to the screen
 */
weatherApp.weatherForZipCodes(zipCodes, function (weatherData) {
  var temp = weatherData.main.temp;
  console.log(
    "Current Temperature for " + weatherData.name + ": " + temp
  );
});
