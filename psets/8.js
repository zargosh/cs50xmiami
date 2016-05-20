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

      if (word.match(/[bcdfghjklmnpqrstvwxz][aeiou][bcdfghjklmnpqrstvz]$/))
        return word.concat(word.charAt(word.length-1).concat("ing"));

      if (word.endsWith("e"))
        return word.substr(0, word.length-1).concat("ing");

      else if (word.endsWith("x") || word.endsWith("w"))
          return word.concat("ing");

      else
        return word.concat("ing");  }

    else return word;
}

var word = verbing("fax");
var wordA = verbing("saw");
var wordB = verbing("go");
var wordC = verbing("pray");
var wordD = verbing("dog");


console.log(word);
console.log(wordA);
console.log(wordB);
console.log(wordC);
console.log(wordD);
