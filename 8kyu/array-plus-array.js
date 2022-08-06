// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

/* 

PARAMETERS:
debug the function to see why arr1 and arr2 aren't adding to the sum of each other

RESULTS:

EXAMPLES:
    assert.strictEqual(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
    assert.strictEqual(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
    assert.strictEqual(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
    assert.strictEqual(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);

PSEUDOCODE:
put the sum of arr1 and arr2 into two separate variables and then return the sum of both of them

*/

const arrayPlusArray = (arr1, arr2) => {
    const arrOne = arr1.reduce( (c, acc) => c + acc, 0);
    const arrTwo = arr2.reduce( (c, acc) => c + acc, 0);

    return arrOne + arrTwo;
}

// console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));

//elegant solution

const arrayPlusArrayAlt = (arr1, arr2) => arr1.concat(arr2).reduce( (c, acc) => c + acc, 0);

console.log(arrayPlusArrayAlt([1, 2, 3], [4, 5, 6]))