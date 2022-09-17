// Description:

// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

/*

PARAMETERS:
given a non-empty array of integers

RESULTS:
return the result of multiplying the values together in order

EXAMPLES:
    assert.strictEqual(grow([1, 2, 3]), 6);
    assert.strictEqual(grow([4, 1, 1, 1, 4]), 16); 
    assert.strictEqual(grow([2, 2, 2, 2, 2, 2]), 64); 

PSEUDOCODE:
reduce the array (?)

*/

const grow = x => {
    return x.reduce( (c, acc) => c * acc, 1);
}

console.log(grow([2, 2, 2, 2, 2, 2]))
