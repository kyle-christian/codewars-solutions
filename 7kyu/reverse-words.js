// Description:

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// Examples

// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

/* 

PARAMETERS:
given a string

RESULTS:
reverse all the words in place, keeping spaces

EXAMPLES:
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

PSEUDOCODE:
split the string into an array, mapping over the array and reversing the strings in place

*/

function reverseWords(str) {
    let arr = str.split(' ')

    return arr.map( element => {
        return element.split('').reverse().join('')
    })
    .join(' ')
}

console.log(reverseWords("hello  there"));
