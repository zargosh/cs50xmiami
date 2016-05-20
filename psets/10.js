/*
The Fortune Teller part 2

Why pay a fortune teller when you can just program your fortune yourself?

Write a function named tellFortune that:
- takes 4 arguments: number of children, partner's name, geographic location, job title.
- outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
- Call that function 3 times with 3 different values for the arguments.
*/

// write your solution here...
function tellFortune(numChildren, partnerName, geoLocal, jobTitle) {
    return console.log("You will be a "+ jobTitle+ " in " + geoLocal + ", and married to " + partnerName + " with " + numChildren+ " kids.");
}

var test = tellFortune(4, "Tracy", "Paris", "Hotdog Vendor");
var test2 = tellFortune(2, "Doug", "Utica", "Squirrel Inhibitor");
var test3 = tellFortune(7, "Monica", "Two Egg", "Feng Shui Master");
