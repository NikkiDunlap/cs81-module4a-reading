//GitHub repository URL: https://github.com/NikkiDunlap/cs81-module4a-reviewtracker

// Weekly reading log - stores each day's reading as an object with day, book, and minutes
const readingLog = 
[
  { day: "Monday", book: "Dune", minutes: 30 },
  { day: "Tuesday", book: "1984", minutes: 20 },
  { day: "Wednesday", book: "Dune", minutes: 25 },
  { day: "Thursday", book: "The Hobbit", minutes: 40 },
  { day: "Friday", book: "1984", minutes: 15 }
];

/*
  Adds a new reading entry to the log.
  Inputs: a day (string), a book title (string), and number of minutes (number).
  Output: updates the readingLog array with a new object entry.
*/
function addReadBook(day, book, minutes) 
{
  const newEntry = { day, book, minutes }; // Create a new reading entry
  readingLog.push(newEntry); // Add it to the log
}

/*
  Calculates the total number of minutes spent reading for the whole week.
  Input: an array of reading log entries.
  Output: a number representing total minutes.
*/
function totalReadingMinutes(log) 
{
  let total = 0;
  for (let entry of log) 
  {
    total += entry.minutes; // Add each day's reading minutes to total
  }
  return total;
}

/*
  Identifies the book that was read most frequently during the week.
  Input: an array of reading log entries.
  Output: the title of the most frequently read book.
*/
function mostReadBook(log) 
{
  const bookCounts = {}; // Create an object to count how many times each book appears
  for (let entry of log) 
  {
    // If book not yet counted, start at 1; otherwise, increment
    if (!bookCounts[entry.book]) 
    {
      bookCounts[entry.book] = 1;
    }
    else
    {
      bookCounts[entry.book]++;
    }
  }

  let maxBook = null;
  let maxCount = 0;

  // Loop through the bookCounts to find the book with the highest count
  for (let book in bookCounts) 
  {
    if (bookCounts[book] > maxCount) 
    {
      maxBook = book;
      maxCount = bookCounts[book];
    }
  }
  return maxBook;
}

/*
  Prints out a daily summary of the books read and time spent.
  Input: an array of reading log entries.
  Output: prints one line per entry to the console.
*/
function printDailySummary(log) 
{
  for (let entry of log) 
  {
    console.log(`${entry.day}: ${entry.minutes} mins reading "${entry.book}"`);
    // Each log entry is formatted for clarity
  }
}

// Test case 1: Add a new Sunday entry
addReadBook("Sunday", "Kindred", 45);

// Test case 2: Add another book to test mostReadBook
addReadBook("Bonus", "The Alchemist", 20);

// Print the updated summary
printDailySummary(readingLog);

// Display total minutes read
console.log("Total minutes read:", totalReadingMinutes(readingLog));

// Display the most read book
console.log("Most read book:", mostReadBook(readingLog));

/*
  Suggested Improvement:
  The function name `addReadBook` could be improved to something more descriptive like `addReadingEntry`.

  Why:
  "addReadBook" sounds like it's just adding a book title, but the function actually logs a full reading session with day and minutes. 
  Renaming it makes the purpose of the function clearer, especially in a larger codebase or for new developers reading the code.
*/
