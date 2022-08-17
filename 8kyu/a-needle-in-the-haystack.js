// Description:

// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 

// Note: In COBOL, it should return "found the needle at position 6"

/* 

PARAMETERS:
given a large array of strings

RESULTS:
should return "found the needle at position" + the index it found the needle at

EXAMPLES:
// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"

PSEUDOCODE:
loop through the array and return the index in a string covering the result

*/

// const findNeedle = haystack => {
//     for (let i = 0; i < haystack.length; i++) {
//         if (haystack[i] === 'needle') {
//             return `Found the needle at ${haystack.indexOf()}`;
//         }
//     }
// }

const findNeedle = haystack => `found the needle at position ${haystack.indexOf('needle')}`;

console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]))