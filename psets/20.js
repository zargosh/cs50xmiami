/*
Your top choices

Create an array to hold your top choices (colors, presidents, whatever).
- For each choice, log to the screen a string like: "My #1 choice is blue."

- Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice",
  picking the right suffix for the number based on what it is.
*/

// write your solution here...

var choices = ["blue", "ochre", "magenta"];

for (var i = 0; i < 3; i++)
  console.log("My #" +(i+1) + " choice is " +choices[i] +".");
  console.log("\n");

for (var i = 0; i < 3; i++) {
if (i == 0)
  console.log ("My " +(i+1) + "st choice is " +choices[i] +".");
else if (i == 1)
  console.log ("My " +(i+1) + "nd choice is " +choices[i] +".");
else if (i == 2)
  console.log ("My " +(i+1) + "rd choice is " +choices[i] +".");  }
