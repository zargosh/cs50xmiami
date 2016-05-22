 /*
The Word Guesser

You'll create a simple word guessing game where the user gets infinite tries to
guess the word (like Hangman without the hangman, or
like Wheel of Fortune without the wheel and fortune).


- Create two global arrays: one to hold the letters of the
  word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters
  (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').

- Write a function called guessLetter that will:
  - Take one argument, the guessed letter.
  - Iterate through the word letters and see if the guessed letter is in there.
  - If the guessed letter matches a word letter, changed the guessed letters
    array to reflect that.
  - When it's done iterating, it should log the current guessed letters ('F__')
  - and congratulate the user if they found a new letter.
  - It should also figure out if there are any more letters that need to be guessed,
  - and if not, it should congratulate the user for winning the game.

- Pretend you don't know the word, and call guessLetter multiple times with
  various letters to check that your program works.

- Bonus: Make it more like Wheel of Fortune:
  - Start with a reward amount of $0
  - Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
  - When they guess the word, log their final reward amount.

- Bonus: Make it like Hangman:
  - Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
  - Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
  - Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.
*/

// write your solution here...

function guessLetter(letter) {

  for (var j = 0; j < current.length; j++) {
    if (letter === current[j]) {
      console.log("   You've already picked that letter.")
      console.log("   Letters you've picked that are in the word: " +current.toString());
      console.log("   Letters left to choose from: " +alphabet.toString());
      return; } }

  for (var k = 0; k < picked.length; k++) {
    if (letter === picked[k]) {
      console.log("   You've already picked that letter.")
      console.log("   Letters in word that you've already picked: " +current.toString());
      console.log("   Letters left to choose from: " +alphabet.toString());
      return; } }

      if (counter === 4)
        console.log("  -- Only one more guess! --");

for (var i = 0; i < word.length; i++) {
    if (letter === word[i]) {
      current.splice(0, 0, letter);
      counter++;

      if(word.sort().join(',')=== current.sort().join(',')){
          var wordStr = word.join("");
          clearInterval(win);
          return console.log('You win! The word was ' +wordStr +".");
          }


    var index = alphabet.indexOf(letter);

      if (index > -1)
        alphabet.splice(index, 1);
        return console.log("Congrats! You've found a letter."); } }



  var index = alphabet.indexOf(letter);
    picked.splice(0, 0, letter);

    if (counter === 5) {
        var wordStr = word.join("");
        clearInterval(win);
        return console.log("Sorry, you lose. The word was " +wordStr +"."); }

    counter++;

    if (index > -1)
      alphabet.splice(index, 1);
        return console.log("Sorry, that's not a match.");

}


function ask(x) {

    const readline = require('readline');

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question('Please pick a letter. ', (answer) => {
        guessLetter(answer);

    rl.close();
    }); }




    var word = ["f", "o", "x"];
    var current = [];
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
                    "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var picked = [];

    console.log("This is a game of hangman. You can choose up to 6 letters. Please wait...");
    var win = setInterval(ask, 3000);

    var counter = 0;
