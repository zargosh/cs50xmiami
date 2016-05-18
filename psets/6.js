/*

MixUp

Create a function called mixUp. It should take in two strings,
and return the concatenation of the two strings (separated by a space) slicing out
and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long.

For example:
  mixUp('mix', pod'): 'pox mid'
  mixUp('dog', 'dinner'): 'dig donner'
Look up the JavaScript string reference to find methods which may be useful!
*/

function mixUp(a, b) {
    var first1 = a.substr(0, 2);
    var first2 = b.substr(0, 2);
    var last1 = a.substr(2);
    var last2 = b.substr(2);
    return first2.concat(last1).concat(" ").concat(first1).concat(last2);
}

var word = "dog";

var word2 = "dinner";

var newSentence = mixUp(word, word2);

console.log(newSentence);
