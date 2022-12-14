// This Kata is intended as a small challenge for my students

// All Star Code Challenge #18

// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0

// Notes:

//     The first argument can be an empty string
//     The second string argument will always be of length 1

/*

PARAMETERS:
given two strings

RESULTS:
return an integer of the count of occurrences the given argument happens within the first argument

EXAMPLES:
// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0

PSEUDOCODE:
use a for loop to enumerate through the first argument, adding points to a sum whenever the 2nd argument agrees with the 1st
*/

function strCount(str, letter) {
    let total = 0
    
    for (let i = 0; i < str.length; i++) {
        if (letter == str[i]) {
            total++
        }
    }

    return total;
}

function strCountAlt(str, letter) {
    let output = str.split(" ", 3);

    console.log(output);
}

strCountAlt("You win some. You lose some.");
