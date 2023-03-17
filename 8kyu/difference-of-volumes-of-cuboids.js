// Description:

// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

// If you can, try writing it in one line of code.
// Fundamentals

/* 

PARAMETERS:
given two arrays as a and b

RESULTS:
find the volume of each array and return the difference

EXAMPLES:
    assert.strictEqual(findDifference([3, 2, 5], [1, 4, 4]), 14);
    assert.strictEqual(findDifference([9, 7, 2], [5, 2, 2]), 106);
    assert.strictEqual(findDifference([11, 2, 5], [1, 10, 8]), 30);
    assert.strictEqual(findDifference([4, 4, 7], [3, 9, 3]), 31);
    assert.strictEqual(findDifference([15, 20, 25], [10, 30, 25]), 0);

PSEUDOCODE:
loop through each array, then return the difference

*/

function findDifference(a, b) {
    aSum = a.reduce((a, c) => a * c, 1);
    bSum = b.reduce((a, c) => a * c, 1);

    return Math.abs(aSum - bSum);
} 

findDifference([9, 7, 2], [5, 2, 2])

// now try to do it in one line

const findDifferenceAlt = (a, b) => Math.abs(a.reduce((a, c) => a * c, 1) - b.reduce((a, c) => a * c, 1))

// clever little workaround

// Math.abs(a[0]*a[1]*a[2]-b[0]*b[1]*b[2]);