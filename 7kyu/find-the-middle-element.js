// Description:

// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0

// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1

// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

/* 

PARAMETERS:
given an array of three values

RESULTS:
determine the middle element and return it's index

EXAMPLES:
    gimme([2, 3, 1]) => 0

    gimme([5, 10, 14]) => 1

PSEUDOCODE:
maybe we can sort the array, determine the middle value, save it to a different array and then compare that value to the index of the original array

*/

const gimme = triplet => {
    let newArr = [...triplet].sort( (a, b) => a -b)
    let midEl = [];

    midEl.push(newArr[1]);

    return triplet.indexOf(Number(midEl.toString()))

}

//I had to change triplet.sort() to [...triplet].sort because sort by itself mutates the original copy. This doesn't work for this solution because once the original has been mutated, the result will always be 1 (because all the arrays would be sorted). However, by using the spread syntax, I'm able to create a shallow copy of the array without having to mutate it!

//a more elegant solution

const gimmeAlt = a => a.indexOf( [...a].sort( (x, y) => x > y)[1]);

console.log(gimmeAlt([2, 3, 1]))