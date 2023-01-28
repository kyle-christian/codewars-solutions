// Task

// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.
// Example

// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

// Input validation

// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.


/*

PARAMETERS:
given an array of numbers

RESULTS:
return the sum of the array without the maximum and minimum number. if the array is null or only has one integer, return 0

EXAMPLES:
  assert.strictEqual( sumArray(null)                     , 0 );
  assert.strictEqual( sumArray([ ])                      , 0 );
  assert.strictEqual( sumArray([ 3 ])                    , 0 );
  assert.strictEqual( sumArray([ 3, 5 ])                 , 0 );
  assert.strictEqual( sumArray([ 6, 2, 1, 8, 10 ])       , 16 );
  assert.strictEqual( sumArray([ 0, 1, 6, 10, 10 ])      , 17 );
  assert.strictEqual( sumArray([ -6, -20, -1, -10, -12 ]), -28 );
  assert.strictEqual( sumArray([ -6, 20, -1, 10, -12 ])  , 3 );

PSEUDOCODE:
use Math.max/min to determine the maximum and minimum number in an array and then modify the array to take out those numbers. then reduce the new array to find the sum. use a conditional to return 0 if the array is null or has a total of one integer

I ended up realizing that determining the max/min and then removing the integer based off of those results would be more work than to just sort the array and use .pop() and .shift() methods instead. 

after popping and shifting, it was easy to reduce the array for the sum.

though I was spot on with the conditional logic.

*/

function sumArray(array) {
    if (array == null || array.length <= 1) {
        return 0;
    } else {
        let sorted = array.sort( (a, b) => a - b)
        sorted.pop();
        sorted.shift();
    
        let sum = sorted.reduce( (acc, c) => acc + c, 0)
        
        return sum
    }
}

sumArray([ 6, 2, 1, 8, 10 ])

// alternative solution using Math.max() and Math.min() which I thought was pretty clever.

function sumArrayAlt(array) {
    return Array.isArray(array) && array.length > 1
    ? array.reduce( (acc, c) => acc + c, 0) - Math.min(...array) - Math.max(...array)
    : 0
}