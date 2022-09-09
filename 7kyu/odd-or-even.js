// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).
// Examples:

// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

// Have fun!

/* 
PARAMETERS:
passing in an array of integers

RESULTS:
we want the sum of the array to indicate odd or even, if the array is empty, consider it [0] which will be even

EXAMPLES:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"

PSEUDOCODE:
take array and reduce it to its sum. if sum = odd return "odd" else return "even"

*/

//my solution

const oddOrEven = array => {
    let sum = array.reduce( (c, acc) => c + acc, 0);
    
    return sum % 2 === 0 ? "even" : "odd";
};

console.log(oddOrEven([-1023, -1, 3]));

// elegant solution

const oddOrEvenAlt = arr => ( (c, acc) => c + acc, 0) % 2 ? 'odd' : 'even';