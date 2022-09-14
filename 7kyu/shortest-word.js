// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

/* 

PARAMETERS:
given a string of words, never empty, nor have any other data types

RESULTS:
return the length of the shortest word (number)

EXAMPLES:
    assert.strictEqual(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
    assert.strictEqual(findShort("turns out random test cases are easier than writing out basic ones"), 3); 
    assert.strictEqual(findShort("Let's travel abroad shall we"), 2);

PSEUDOCODE:
split the string into an array of words, iterate through the array and return the length of the shortest word

*/

const findShort = s => {
    arr = s.split(' ')

    let shortest = arr.reduce( (shortestWord, currentWord) => {
        return currentWord.length < shortestWord.length ? currentWord : shortestWord;
    }, arr[0]);

    return shortest.length;
}

console.log(findShort(`Let's travel abroad shall we`))


//elegant solution

const findShortAlt = s => Math.min(...s.split(' ').map (s => s.length));