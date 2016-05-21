/*
The Reading List

Keep track of which books you read and which books you want to read!

- Create an array of objects, where each object describes a book and has
  properties for the title (a string), author (a string),
  and alreadyRead (a boolean indicating if you read it yet).

- Iterate through the array of books. For each book, log the book title
  and book author like so: "The Hobbit by J.R.R. Tolkien".

- Now use an if/else statement to change the output depending on whether you
  read it yet or not. If you read it, log a string like
  'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string
  like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
*/

// write your solution here...
var book = {
  title: ["De Rerum Natura", "American Pastoral", "Seven Brief Lessons on Physics"],
  author: ["Lucretius", "Philip Roth", "Carlo Rovelli"],
  alreadyRead: ["F", "T", "T"] };


for (var i = 0; i < 3; i++)
  console.log(book.title[i]+ " by " +book.author[i] +".");
  console.log("\n");

for (var i = 0; i < 3; i++) {
  if (book.alreadyRead[i] == "F")
    console.log("You still need to read " +book.title[i]+ " by " +book.author[i] +".");
  else
    console.log("You've already read " +book.title[i]+ " by " +book.author[i] +".");
  }
