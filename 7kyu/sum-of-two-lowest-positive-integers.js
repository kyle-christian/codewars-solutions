// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

//PARAMETERS: on array of positive integers, array has min of 4 integers

//RESULTS: the sum of the two lowest integers in the array

//EXAMPLES: 

/*
assert.strictEqual(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13 , "Sum should be 13");
assert.strictEqual(sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6 , "Sum should be 6");
assert.strictEqual(sumTwoSmallestNumbers([3, 87, 45, 12, 7]), 10 , "Sum should be 10");
assert.strictEqual(sumTwoSmallestNumbers([23, 71, 33, 82, 1]), 24 , "Sum should be 24");
assert.strictEqual(sumTwoSmallestNumbers([52, 76, 14, 12, 4]), 16 , "Sum should be 16");
*/

//PSEUDOCODE

// declare function which takes in an array of nums as parameter
// declare sum variable = 0
// take array, sort it, and put the value into another variable
// after sorting the array, take index [0], [1], add together and place into sum variable


//MY SOLUTION NOT UTILIZING PREP

//return sum of two lowest positive numbers (minimum 4 positive integers)

const sumTwoSmallestnumbers = nums => {
    let sum = 0;
    let sorted = nums.sort( (a,b) => {return a - b} );

    return sum = sorted[0] + sorted[1];
} 

console.log(sumTwoSmallestnumbers([15, 28, 4, 2, 43]));