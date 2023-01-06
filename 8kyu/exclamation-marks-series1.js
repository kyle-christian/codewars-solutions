// Description:

// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
// Examples

// remove("Hi!") == "Hi"
// remove("Hi!!!") == "Hi!!"
// remove("!Hi") == "!Hi"
// remove("!Hi!") == "!Hi"
// remove("Hi! Hi!") == "Hi! Hi"
// remove("Hi") == "Hi"

/* 

PARAMETERS:
given a string

RESULT:
remove the exclamation point once if it appears on the end

EXAMPLES:
// remove("Hi!") == "Hi"
// remove("Hi!!!") == "Hi!!"
// remove("!Hi") == "!Hi"
// remove("!Hi!") == "!Hi"
// remove("Hi! Hi!") == "Hi! Hi"
// remove("Hi") == "Hi"

PSEUDOCODE:
use .length - 1 method to determine the end of the string and use a conditional to check whether it's an exclamation point or not. then split into an array, and pop to remove the last element

*/

function remove (string) {
    let arr = string.split('')

    if (arr[arr.length - 1] == "!") {
        arr.splice(arr.length - 1, 1)
    }

    return arr.join('')
}

remove("hello world!");

//simpler solution using .endsWith

let removeAlt = s => s.endsWith('!') ? s.slice(0, -1) : s;