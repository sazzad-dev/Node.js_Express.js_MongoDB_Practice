/*
 Title: Quotes Library
 Description: Utility library for getting a list of Quotes
 Author: Md.Sazzad.Hossain.Bhuiyan
 Date: 04/06/2022
 */

 //Dependencies
const fs = require('fs');

//module scaffolding
const quotes = {};

// Get all the quotes and return them to the user
quotes.allQuotes = function allQuotes(){
    // Read the text file containing the quotes
    const fileContent = fs.readFileSync(`${__dirname}/quotes.txt`, 'utf8');

    // Turn the string into an array
    const arrayOfQuotes = fileContent.split(/\r?\n/)

    //return the array
    return arrayOfQuotes;
}

module.exports = quotes;