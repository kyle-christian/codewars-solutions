// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

/* 

PARAMETERS:
given a string

RESULTS:
write a function that takes out the exclamation points

EXAMPLES:
assert.strictEqual(removeExclamationMarks("Hello World!"), "Hello World")

PSEUDOCODE:
write a function that filters a string using .filter method

*/

function removeExclamationMarks(s) {
    console.log(s.replace("!", ""))

    return s.replace("!", "");
}

removeExclamationMarks("Hello World!!")