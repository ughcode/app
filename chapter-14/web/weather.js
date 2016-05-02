
(function () {

  var apiUrl = 'http://api.openweathermap.org/data/2.5/weather';

  var apiKey = 'fa32f';

  function getWeather(locationObject, callback) {
    var url = apiUrl +
      '?appid=' + apiKey +
      '&units=imperial' +
      '&' + parameterize(locationObject);

    makeRequest(url, function (responseText) {
      response = JSON.parse(responseText);
      callback(response);
    });
  }

  function parameterize(object) {
    var params = [];
    for (var key in object) {
      params.push(key + '=' + encodeURIComponent(object[key]));
    }
    return params.join('&');
  }

  function makeRequest(url, callback) {
    var xhrObject = new XMLHttpRequest();
    xhrObject.onload = function () {
      callback(xhrObject.responseText);
    };
    xhrObject.open('GET', url, true);
    xhrObject.send();
  }

  function getUserCoordinates(callback) {
    navigator.geolocation.getCurrentPosition(function (position) {
      if (position.coords) {
        callback(position.coords);
      } else {
        console.error("Didn't get a valid coordinate, meow!");
      }
    });
  }

  function weatherForMyLocation(callback) {
    getUserCoordinates(function (coord) {
      getWeather({
        lon: coord.longitude,
        lat: coord.latitude
      }, callback);
    });
  }

  function weatherForZipCodes(zips, callback) {
    for (var i = 0; i < zips.length; i++) {
      getWeather({
        zip: zips[i]
      }, callback);
    }
  }

  window.weatherApp = {
    weatherForMyLocation: weatherForMyLocation,
    weatherForZipCodes: weatherForZipCodes
  };

})();
