// Description:

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"

// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

/* 

PARAMETERS:
given a string

RESULTS:
return the middle character. if the string is odd, return one, else if the string is even, return the middle 2 characters

EXAMPLES:
Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"

PSEUDOCODE:
maybe we can use the .slice method to calculate the middle, else we can split the string into an array and calculate the middle that way

*/

//my solution

const getMiddle = s => {
    if (s.length % 2 === 1) {
        return s.substring( (s.length / 2), ( (s.length / 2) + 1) )
    } else {
        return s.substring( ( (s.length / 2) - 1), ( (s.length / 2) + 1) )
    }
}

console.log(getMiddle('a'))

//elegant solution

const getMiddleAlt = s => s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);