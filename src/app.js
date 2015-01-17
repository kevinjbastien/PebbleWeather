/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
// Create a Card with title and subtitle
var card = new UI.Card({
  title:'Weather',
  subtitle:'Fetching...'
});

// Display the Card
card.show();

var ajax = require('ajax');
// Construct URL
// Taking weather data from OpenWeatherMap.org
var cityName = 'Portland';
var URL = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName;

// Make the request
ajax(
  {
    url: URL,
    type: 'json'
  },
  function(data) {
    // Success!
    console.log('Successfully fetched weather data!');

    // Extract data
    var location = data.name;
    var temperature = (Math.round(data.main.temp - 273.15)* 1.8000 + 32.00) + 'F';
    
    // Always upper-case first letter of description
    var description = data.weather[0].description;
    description = description.charAt(0).toUpperCase() + description.substring(1);
    
    // Show to user
    card.subtitle(location + ', ' + temperature);
    card.body(description);
  
  },
  
  function(error) {
    // Failure!
    console.log('Failed fetching weather data: ' + error);
  }
);

