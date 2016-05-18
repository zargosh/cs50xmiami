/*
The Lifetime Supply Calculator

Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

- Store your current age into a variable.
- Store a maximum age into a variable.
- Store an estimated amount per day (as a number).
- Calculate how many you would eat total for the rest of your life.
- Output the result to the screen like so:
"You will need NN to last you until the ripe old age of X".
*/

// write your solution here...
var currentAge = 47;

var maxAge = 98;

var amountPerDay = 7;

var leapYearCalc = Math.floor(maxAge - currentAge) / 4;

var amountLeap = leapYearCalc * amountPerDay;

var amountRegularYear = Math.floor((maxAge - currentAge) * (amountPerDay * 365));

var totalAmount = Math.floor(amountLeap + amountRegularYear);


console.log("You will need " +totalAmount+ " to last you until the ripe old age of " +maxAge+ ".");
