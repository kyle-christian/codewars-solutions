// Description:

// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]

// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.

/* 

PARAMETERS:
given a string

RESULTS:
return the string with the length of the word next to it consecutively within an array

EXAMPLES:
"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]

PSEUDOCODE:
let arr = [] split the str into the arr so that it's saved
use a for loop to enumerate through the array and add the arr[i].length to the string based on index and length
return arr

*/

function addLength(str) {
    let arr = [...str.split(' ')]
    for (let i = 0; i < arr.length; i++) {
        arr[i] += ` ${arr[i].length}`
    }

    return arr;
}

addLength('apple bees')

// simpler solution using .map

const addLengthAlt = str => str.split(' ').map(s => `${s} + ${s.length}`);