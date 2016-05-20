/*
The even/odd reporter

- Write a for loop that will iterate from 0 to 20.
- For each iteration, it will check if the current number is even or odd,
  and report that to the screen (e.g. "2 is even").
*/

// write your solution here...
// var i;
//
// for (i = 0; i < 20; i++) {
//   return console.log(i+1); }

  for(var i = 0; i < 20; i++){
    if ((i+1) % 2 == 0)
      console.log((i+1)+ " is even.");
    else
      console.log((i+1)+ " is odd."); }

    // return;
