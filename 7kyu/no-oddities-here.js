// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

/* 

PARAMETERS:
given an array of values

RESULTS:
return an array of even numbers in the order that they were given

EXAMPLES:
    assert.deepEqual( noOdds( [0,1] ), [0] )
    assert.deepEqual( noOdds( [0,1,2,3] ), [0,2] )

PSEUDOCODE:
iterate through the array use .map to return a new array with even only values?

*/

const noOdds = values => {
    evenArr = [];

    values.map( num => {
        if (num % 2 === 0) {
            evenArr.push(num);
        }
    })

    return evenArr;
}

console.log(noOdds([0,1,2,3]));

//elegant solution using filter

const noOddsFilter = v => v.filter( x => x % 2 === 0);