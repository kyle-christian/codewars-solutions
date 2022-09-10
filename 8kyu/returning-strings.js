// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

// [Make sure you type the exact thing I wrote or the program may not execute properly]

/*

PARAMETERS:
given a string

RESULTS:
insert input

EXAMPLES:
    assert.strictEqual(greet("Ryan"), "Hello, Ryan how are you doing today?");
    assert.strictEqual(greet("Shingles"), "Hello, Shingles how are you doing today?");

PSEUDOCODE:
return string using backticks to insert the given value

*/

const greet = name => `Hello, ${name} how are you doing today?`;