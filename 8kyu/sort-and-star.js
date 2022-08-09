// Description:

// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.
// Fundamentals
// Strings
// Arrays

/* 

PARAMETERS:
given a list of strings

RESULTS:
sort it alphabetically
 - case sensitive
 - based on ASCII values

then return the first value. the returned value must have *** between each of its letters

should not remove or add elements from/to the array

EXAMPLES:

assert.strictEqual(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' );
assert.strictEqual(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e'); 

PSEUDOCODE: sort the array

*/

const twoSort = s => {
    s.sort()

    return `${s[0].split('').join('***')}`;
}

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]));