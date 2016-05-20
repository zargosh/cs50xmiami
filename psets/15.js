/*
What number's bigger?

Write a function named greaterNum that:
- takes 2 arguments, both numbers.
- returns whichever number is the greater (higher) number.

Call that function 2 times with different number pairs,
and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").
*/

// write your solution here...
function greaterNum(x, y) {
  if (x > y)
    return x;
  else if (x == y)
    return console.log ("These two numbers are the same.");
  else return y;
}

var case1 = greaterNum(12, 25);
var case2 = greaterNum(48, 3);

console.log("The greater of these two numbers is " +case1);
console.log("The greater of these two numbers is " +case2);
