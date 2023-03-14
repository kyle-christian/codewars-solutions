// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

/* 

PARAMETERS:
given a and b

RESULTS:
return an array of numbers spanning from a to b inclusive

EXAMPLES:
it("between(1, 4)", () => assert.deepStrictEqual(between(1, 4), [1, 2, 3, 4]));
it("between(-2, 2)", () => assert.deepStrictEqual(between(-2, 2), [-2, -1, 0, 1, 2]));

PSEUDOCODE:

negatives included. 

create an empty array

use a for loop that starts at a and ends at b, each time adding integers into the array using .push method

return array

*/

function between(a, b) {
    let arr = []
    
    for (let i = a; i <= b; i++) {
        arr.push(i);
    }

    return arr;
}

between(-2, 2);

// clever solution using a constructor and .from?

const betweenAlt = (a, b) => Array.from(new Array(b-a + 1), (_, i) => a + i);

// the (b-a + 1) is to determine the array length.