/*
The Pluralizer

Write a function named pluralize that:
- takes 2 arguments, a noun and a number.
- returns the number and pluralized form, like "5 cats" or "1 dog".

Call that function for a few different scores and log the result to make sure it works.
- Bonus: Make it handle a few collective nouns like "sheep" and "geese".
*/

// write your solution here...
function pluralize(noun, number) {
  if (noun == "geese" || noun == "deer" || noun == "sheep")
    return console.log(number+ " " +noun + ".");
  else if (number == 1)
    return console.log(number+ " " +noun + ".");
  else
    return console.log(number+ " " +noun + "s.");
}

pluralize("cat", 5);
pluralize("dog", 20);
pluralize("sheep", 6);
pluralize("geese", 3);
pluralize("deer", 4);
pluralize("aardvark", 1);
