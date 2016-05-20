/*
The Lifetime Supply Calculator part 2

Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

Write a function named calculateSupply that:
- takes 2 arguments: age, amount per day.
- calculates the amount consumed for rest of the life (based on a constant max age).
- outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
- Call that function three times, passing in different values each time.
- Bonus: Accept floating point values for amount per day, and round the result to a round number.
*/

// write your solution here...

function calculateSupply(currentAge, amountPerDay) {

    var maxAge = 98;

    var leapYearCalc = Math.floor(maxAge - currentAge) / 4;

    var amountLeap = leapYearCalc * amountPerDay;

    var amountRegularYear = Math.floor((maxAge - currentAge) * (amountPerDay * 365));

    var totalAmount = Math.floor(amountLeap + amountRegularYear);

    return console.log("You will need " +totalAmount+ " to last you until the ripe old age of " +maxAge+ ".");

}

calculateSupply(47, 7);
calculateSupply(12, 2);
calculateSupply(26, 47);
