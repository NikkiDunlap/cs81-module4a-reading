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

// Test case: Add a new Sunday entry
addReadBook("Sunday", "Kindred", 45); // New data to test the functions

// Example usage
printDailySummary(readingLog);
console.log("Total minutes read:", totalReadingMinutes(readingLog));
console.log("Most read book:", mostReadBook(readingLog));

// Suggested improvement:
// Rename `addReadBook` to `addReadingEntry` for clarity.
