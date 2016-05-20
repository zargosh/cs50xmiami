/*
The Temperature Converter

It's hot out! Let's make a converter based on the steps here:
http://www.mathsisfun.com/temperature-conversion.html

Create a function called celsiusToFahrenheit:
- Store a celsius temperature into a variable.
- Convert it to fahrenheit and output "NN°C is NN°F".

Create a function called fahrenheitToCelsius:
- Now store a fahrenheit temperature into a variable.
- Convert it to celsius and output "NN°F is NN°C."
*/

// write your solution here...

function celsiusToFahrenheit(celsiusTemp) {
    var convertToFaren = round((celsiusTemp * 9) / 5 + 32, 2);
    return console.log(+celsiusTemp+ "°C is " +convertToFaren+"°F.");
}

function fahrenheitToCelsius(farenheitTemp) {
    var convertToCel = round((farenheitTemp - 32) * 5 / 9, 2);
    return console.log(+farenheitTemp+ "°F is " +convertToCel+"°C.");
}

function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

celsiusToFahrenheit(34);
fahrenheitToCelsius(75);
