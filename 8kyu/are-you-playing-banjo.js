// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"

// Names given are always valid strings.

/*

PARAMETERS:
given a string

RESULTS:
return name + "plays banjo" if string starts with r else
return name + "does not play banjo"

EXAMPLES:
    assert.strictEqual(areYouPlayingBanjo("Adam"), "Adam does not play banjo");
    assert.strictEqual(areYouPlayingBanjo("Paul"), "Paul does not play banjo");
    assert.strictEqual(areYouPlayingBanjo("Ringo"), "Ringo plays banjo");
    assert.strictEqual(areYouPlayingBanjo("bravo"), "bravo does not play banjo");
    assert.strictEqual(areYouPlayingBanjo("rolf"), "rolf plays banjo");

PSEUDOCODE:
take string and use conditional to see if first index === r. use toLowerCase to normalize all tests

*/

const areYouPlayingBanjo = name => name.toLowerCase()[0] === 'r' ? `${name} plays banjo` : `${name} does not play banjo`;