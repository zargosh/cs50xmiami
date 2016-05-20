/*
The Age Calculator part 2

Forgot how old you are? Calculate it!

Write a function named calculateAge that:
- takes 2 arguments: birth year, current year.
- calculates the 2 possible ages based on those years.
- outputs the result to the screen like so: "You are either NN or NN"
- Call the function three times with different sets of values.
- Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
*/

// write your solution here...
function calculateAge(birthYear, currentYear) {

  var age1 = (currentYear - birthYear);

  var age2 = (currentYear - birthYear) - 1;

  return console.log("You are either " + age2+ " or " + age1+ "."); }

calculateAge(1969, 2016);
calculateAge(1925, 2016);
calculateAge(1999, 2016);
