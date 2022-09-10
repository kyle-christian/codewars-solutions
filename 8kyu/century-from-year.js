// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
// Task

// Given a year, return the century it is in.
// Examples

// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

/*

PARAMETERS:
given a number

RESULTS:
return the century it is in, the first century is from year 1 <= 100, then year two 101 <= 200

EXAMPLES:
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

PSEUDOCODE: 
create a function with a while loop taking in the year, and while the loop is running, increment the century value by 1 according to the results above

*/

const century = year => {
    return Math.ceil(year/100);
}

console.log(century(2001));