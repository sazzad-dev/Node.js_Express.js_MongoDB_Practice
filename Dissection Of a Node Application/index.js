/* 
Title: Basic Node Application
Description: This node application can print random quotes per second interval
Author: Md.Sazzad.Hossain.Bhuiyan
Date: 04/06/2022
*/

// Dependencies
const mathLibrary = require('./lib/math');
const QuotesLibrary = require('./lib/quotes');

// module scaffolding
const app = {};

//Configuration
app.config = {
    timeBetweenQuotes: 1000,
}

//Function that can print quotes
app.printQuote = function printQuote(){
    const allQuotes = QuotesLibrary.allQuotes();

    const numberOfQuotes = allQuotes.length;

    // Pick a random number between 1 and the number of quotes
    const randomNumber = mathLibrary.getRandomNumber(1, numberOfQuotes);

    // Get the quote at that position in the array (minus one)
    const selectedQuote = allQuotes[randomNumber - 1];
    
    console.log(selectedQuote);

}

// Function that loops indefinitely, calling the printAQuote function as it goes
app.indefiniteLoop = function indefiniteLoop() {
    // Create the interval, using the config variable defined above
    setInterval(app.printQuote, app.config.timeBetweenQuotes);
};

// Invoke the loop
app.indefiniteLoop();