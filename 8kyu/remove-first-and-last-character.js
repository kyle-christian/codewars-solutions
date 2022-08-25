// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

/*
PARAMETERS:
given a string that is >= 2 characters

RESULT:
return string without the first and last characters

EXAMPLE:
    assert.strictEqual(removeChar('eloquent'), 'loquen');
    assert.strictEqual(removeChar('country'), 'ountr');
    assert.strictEqual(removeChar('person'), 'erso');
    assert.strictEqual(removeChar('place'), 'lac');
    assert.strictEqual(removeChar('ooopsss'), 'oopss');

PSEUDOCODE:
turn string into array, pop and shift, turn back into array
*/

//my solution

const removeChar = str => {
    arr = str.split('');
    delete arr[0]
    delete arr[arr.length - 1];

    return arr.join('');
}

console.log(removeChar('money'));

//elegant solution

const removeCharAlt = str => str.slice(1, -1);