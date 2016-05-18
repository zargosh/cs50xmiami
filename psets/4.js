/*
The Temperature Converter

It's hot out! Let's make a converter based on the steps here:
http://www.mathsisfun.com/temperature-conversion.html

- Store a celsius temperature into a variable.
- Convert it to fahrenheit and output "NN°C is NN°F".
- Now store a fahrenheit temperature into a variable.
- Convert it to celsius and output "NN°F is NN°C."
*/

// write your solution here...

function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}
var celsiusTemp = 34;

var convertToFaren = round((celsiusTemp * 9) / 5 + 32, 2);

var farenheitTemp = 76;

var convertToCel = round((farenheitTemp - 32) * 5 / 9, 2);

console.log(+celsiusTemp+ "°C is " +convertToFaren+"°F.");
console.log(+farenheitTemp+ "°F is " +convertToCel+"°C.");
