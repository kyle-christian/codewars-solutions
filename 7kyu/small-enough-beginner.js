// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.


/* 

PARAMETERS:
given an array and a limit

RESULTS:
return a boolean based on if the array's values are below or equal to the given limit

EXAMPLES:
    assert.strictEqual(smallEnough([66, 101], 200), true);
    assert.strictEqual(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100), false);
    assert.strictEqual(smallEnough([101, 45, 75, 105, 99, 107], 107), true);
    assert.strictEqual(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120), true);

PSEUDOCODE:
enumrate through the numbers of the array, comparing them with the limit. if one number is greater than the limit, return false for the whole array

*/

const smallEnough = (a, limit) => {
    let falseNum = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] <= limit) {
            continue;
        } else {
            falseNum++;
        }
    }

    return !falseNum > 0;
}

//elegant solution

function smallEnoughAlt(a, limit) {
    return Math.max(...a) <= limit;
}

//another solution using the .every method

const smallEnoughEvery = (a, l) => a.every( (el) => el <= l);

console.log(smallEnoughEvery([2,5,3,6,9], 5));