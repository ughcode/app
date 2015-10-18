/*
   Weather

   filename: weather.js

   This file is intended to tie our Weather App to the DOM elements
   Since it relies on weather_app.js, we need to make sure to include this file
   after we include weather_app.js
 */

(function () {

  var descriptions = [
    {
      min: 80,
      text: "Ugh, it's hot as balls."
    },
    {
      min: 60,
      text: "It's warm, brah."
    },
    {
      min: 40,
      text: "Getting chilly, eh?"
    },
    {
      min: 20,
      text: "Maybe moving to LA is not such a bad idea after all."
    },
    {
      min: -Infinity,
      text: "Shit. Fuck. Shit."
    }
  ];

  // Declaring variables that will be later accessed by our functions
  var tempEl, textEl, zipInputEl, locationEl, borderEl;

  function init() {
    // Get reference to DOM elements we're going to use throughout the app.
    // This is some form of caching.
    zipInputEl = document.getElementById('zip');
    tempEl     = document.getElementById('temp');
    locationEl = document.getElementById('location');
    textEl     = document.getElementById('text');
    borderEl   = document.getElementById('border');

    // Attach an event handler to our form
    document
      .getElementById('form')
      .addEventListener('submit', formHandler);

    // Load weather data for the user's current location
    weatherApp.weatherForMyLocation(updateWeather);
  }

  /*
    This function is responsible for returning the appropriate
    description based on the temperature provided to it.
   */
  function getDescription(temp) {
    for (var i = 0; i < descriptions.length; i++) {
      if (temp >= descriptions[i].min) {
        return descriptions[i].text;
      }
    }
  }

  /*
    This function inserts the data in the right places
   */
  function updateWeather(weatherData) {
    var temp = weatherData.main.temp;
    locationEl.innerText = weatherData.name;
    tempEl.innerHTML = temp + " &#8457;";
    textEl.innerText = getDescription(temp);

    var rotatePct =
      (temp - weatherData.main.temp_min) /
      (weatherData.main.temp_max - weatherData.main.temp_min);

    borderEl.style.transform = "rotate(" + rotatePct * 360 + "deg)";
  }

  /*
    This function just handles our form 'submit' event, makes sure it doesn't
    actually submit, and then fires a temperature lookup based on the zip
    code entered
   */
  function formHandler(event) {
    event.preventDefault();
    var zip = zipInputEl.value;
    weatherApp.weatherForZipCodes([zip], updateWeather);
  }

  // Attaching our init function to be called after the window has
  // completed loading
  window.addEventListener('load', init);

})();
