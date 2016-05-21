/*
The Calculator

- Write a function called squareNumber that will take one argument (a number),
  square that number, and return the result.
  It should also log a string like "The result of squaring the number 3 is 9."

- Write a function called halfNumber that will take one argument (a number),
  divide it by 2, and return the result.
  It should also log a string like "Half of 5 is 2.5.".

- Write a function called percentOf that will take two numbers,
  figure out what percent the first number represents of the second number,
  and return the result. It should also log a string like "2 is 50% of 4."

- Write a function called areaOfCircle that will take one argument (the radius),
  calculate the area based on that, and return the result.
  It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
  - Bonus: Round the result so there are only two digits after the decimal.

Write a function that will take one argument (a number) and perform the following operations,
  using the functions you wrote earlier:
  - Take half of the number and store the result.
  - Square the result of #1 and store that result.
  - Calculate the area of a circle with the result of #2 as the radius.
  - Calculate what percentage that area is of the squared result (#3).
*/


// write your solution here...
function squareNumber(x) {
  console.log("The result of squaring the number " +x + " is " +(x*x) +".");
  return x * x;
}

function halfNumber(x) {
  console.log("Half of " +x + " is " +round((x/2), 2) +".");
  return x / 2;
}

function percentOf(x, y) {
    console.log(x + " is " +round(Math.abs((x / y) * 100), 2) +"% of " +y +".");
    return Math.abs((x / y) * 100); }

function areaOfCircle(radius) {
    var area = Math.PI * Math.pow(radius, 2)
    console.log("The area for a circle with radius " +radius + " is " +round(area, 2) +".");
    return round(area, 2);
  }

function multi(x) {
  var half = halfNumber(x);
  var square = squareNumber(half);
  var area = areaOfCircle(square);
  var percent = percentOf(area, square);
}


function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals); }

squareNumber(5);
halfNumber(5);
percentOf(7, 300);
areaOfCircle(13);
console.log("\n");
multi(4);
