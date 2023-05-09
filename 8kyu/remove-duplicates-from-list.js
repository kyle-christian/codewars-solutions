// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

/* 

PARAMETERS:
given an array of numbers

RESULTS:
return the duplicates as the result

EXAMPLES:
    assert.deepEqual(distinct([1]), [1]);
    assert.deepEqual(distinct([1,2]), [1,2]);
    assert.deepEqual(distinct([1,1,2]), [1,2]);

PSEUDOCODE:

*/

// https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array

const distinct = a => [...new Set(a)];