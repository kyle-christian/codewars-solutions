// Write a function that always returns 5

// Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/

// Good luck :)

/* 

PARAMETERS:
no given param

RESULTS:
return 5 without using the stated characters

EXAMPLES:
assert.strictEqual(unusualFive(), 5);

PSEUDOCODE:
array.length

*/

const unusualFive = () => {
    let arr = ['one', 'two', 'three', 'four', 'five']

    return arr.length;
}

// clever and shorter solution

function unusualFiveAlt() {
    return 'fucku'.length
}