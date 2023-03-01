// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

/* 

PARAMETERS:
given an array

RESULTS:
remove every other element within the array

EXAMPLES:
    assert.deepEqual(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']),['Hello', 'Hello Again']);
    assert.deepEqual(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),[1, 3, 5, 7, 9]);
    assert.deepEqual(removeEveryOther([[1, 2]]), [[1, 2]]);
    assert.deepEqual(removeEveryOther([['Goodbye'], {'Great': 'Job'}]),[['Goodbye']]);

PSEUDOCODE:
use the .splice method to delete the second element

*/

function removeEveryOther(arr) {
    let i = arr.length;
    
    while (i--) {
        (i + 1) % 2 === 0 && arr.splice(i, 1)
    }

    return arr;
}

removeEveryOther([1, 2, 3, 4, 5, 6, 7])

// alternative solution using .filter method

function removeEveryOtherAlt(arr) {
    return arr.filter( (elem, index) => {
        return index % 2 === 0;
    })
}