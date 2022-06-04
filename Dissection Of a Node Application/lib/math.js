/*
 Title: Math Library
 Description: Utility library for math related function
 Author: Md.Sazzad.Hossain.Bhuiyan
 Date: 04/06/2022
 */

//module scaffolding
const math = {};

math.getRandomNumber = function getRandomNumber(min, max){
    let maximum = max;
    let minimum = min;
    maximum = typeof maximum === 'number' ? maximum : 0;
    minimum = typeof minimum === 'number' ? minimum : 0;

    return Math.floor(Math.random() * (maximum - minimum + 1) + min)
}

module.exports = math;