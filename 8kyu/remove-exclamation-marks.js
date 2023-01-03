// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

/* 

PARAMETERS:
given a string

RESULTS:
write a function that takes out the exclamation points

EXAMPLES:
assert.strictEqual(removeExclamationMarks("Hello World!"), "Hello World")

PSEUDOCODE:
write a function that replaces exclamation marks using the .replaceAll string method

*/

function removeExclamationMarks(s) {
    return s.replaceAll("!", "");
}

removeExclamationMarks("Hello World!!")

let removeAlt = (s) => s.replaceAll("!", "");