// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

// If you need help, here's a reference:

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

/* 

PARAMETERS:
given an array and a number n

RESULTS:
return the array from the first n elements

EXAMPLES:
Test.assertDeepEquals(take([0, 1, 2, 3, 5, 8, 13], 3), [0, 1, 2], "should return the first 3 items");

PSEUDOCODE:
array.prototype.slice()

*/

function take(arr, n) {
    console.log(arr.slice(0, n));
}

take([0, 1, 2, 3, 5, 8, 13], 3)

//refactor

const take = (arr, n) => arr.slice(0, n);