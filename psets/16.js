/*
The World Translator

Write a function named helloWorld that:
- takes 1 argument, a language code (e.g. "es", "de", "en")
- returns "Hello, World" for the given language, for at least 3 languages.
  It should default to returning English.

Call that function for each of the supported languages
and log the result to make sure it works.
*/

// write your solution here...
function helloWorld(langCode) {
  if (langCode == "es")
    return console.log("Hola, Mundo");
  else if (langCode == "de")
    return console.log("Hallo, Welt");
  else
    return console.log("Hello, World");
  }

helloWorld("es");
helloWorld("de");
helloWorld("en");
helloWorld("ja");
