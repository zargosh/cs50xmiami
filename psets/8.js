/*
Verbing

Create a function called verbing.

It should take a single argument, a string.
If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing',
in which case it should add 'ly' instead.
If the string length is less than 3, it should leave it unchanged.

For example:

  verbing('swim'): 'swimming'
  verbing('swimming'): 'swimmingly'
  verbing('go'): 'go'

*/


function verbing(word) {
    var len = word.length;
    if (word.endsWith("ing"))
      return word.concat("ly");
    else if (len >= 3){
      if (word.endsWith("e"))
        return word.substr(0, word.length-1).concat("ing");
      else if (word.endsWith("x"))
          return word.concat("ing");
      else if (word.endsWith("w"))
          return word.concat("ing");
      /* there must be some way to combine the "x" and "w" endsWith statements,
      but when I try to do it, it doesn't function properly

      I want to check if the word is one syllable with the following pattern:
      <consonant-vowel-consonant> and then double the last letter if it is.
      It seems like it needs a RegExp statement like the following, but I can't
      get it to function properly   [a-z&&[^aeiou]][aeiou][a-z&&[^aeiou]]";
        return word.concat(word.charAt(word.length-1).concat("ing")); */
      else
        return word.concat("ing");  }
    else return word;
}

var word = verbing("foc");
var wordA = verbing("swimming");
var wordB = verbing("go");

console.log(word);
console.log(wordA);
console.log(wordB);
