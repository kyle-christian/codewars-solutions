// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

// Hint for R users:

//     The length of string is not always the same as the number of characters

// For example: (Input1, Input2) --> output

// ("1", "22") --> "1221"
// ("22", "1") --> "1221"

/* 

PARAMETERS:
given two strings

RESULTS:
put the longer string in the middle with the shorter string on both sides

EXAMPLES:
// ("1", "22") --> "1221"
// ("22", "1") --> "1221"

PSEUDOCODE:
use .length to determine the longer of both strings and set up a new variable which inserts the longer string in between the shorter one

*/

function solution(a, b) {
    const aLength = a.length
    const bLength = b.length

    let result = "";

    if (aLength > bLength) {
        result = `${b}${a}${b}`
    } else {
        result = `${a}${b}${a}`
    }

    return result
}

solution("1", "22");

function solutionAlt(a, b) {
    return a.length < b.length ? a + b + a : b + a + b;
}