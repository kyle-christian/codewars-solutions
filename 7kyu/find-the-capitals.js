// Description:
// Instructions

// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
// Example

// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

/*

PARAMETERS:
given a string

RESULTS:
extract the indexes of the capital letters and sort them into an array

EXAMPLES:
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

PSEUDOCODE:
use .map

*/

const capitals = word => {
    let wordArr = word.split('');
    let newArr = [];
    wordArr.map( (letter, index) => {
        if (letter == letter.toUpperCase()) {
            newArr.push(index);
        }
    })

    return newArr;
};

console.log(capitals('CodEWaRs'));

//best practice solution

var capitalsAlt = function (word) {
    var caps = [];
    for (var i = 0; i < word.length; i++) {
        if (word[i].toUpperCase() == word[i]) caps.push(i);
    }

    return caps;
};

//elegant solution

var capitalsAltAlt = function (word) {
    return word.split('')
               .map(function (l, i) { if (l.toUpperCase() === l) return i; })
               .filter(function (i) { return i != null })
};