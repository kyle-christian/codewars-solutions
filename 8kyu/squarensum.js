// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

/*

PARAMETERS:
you are given an array of whole integers. 

RESULT:
take the array, square each value and return the sum

EXAMPLES:
    assert.strictEqual(squareSum([1,2]), 5);
    assert.strictEqual(squareSum([0, 3, 4, 5]), 50);
    assert.strictEqual(squareSum([]), 0);

PSEUDOCODE:
return the array with the .reduce method

*/

const squareSum = numbers => numbers.reduce( (c, acc) => c + (acc ** 2), 0);

console.log(squareSum([0, 3, 4, 5]));