// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.

/* 

PARAMETERS:
given a boolean

RESULTS:
turn the given boolean into a string

EXAMPLES:
    Test.assertEquals(booleanToString(true), "true", 'When we pass in true, we want the string "true" as output');
    Test.assertEquals(booleanToString(false), "false", 'When we pass in false, we want the string "false" as output');

PSEUDOCODE:
take boolean and use toString() method to convert then return

*/

const booleanToString = b => b.toString();

console.log(typeof booleanToString(true));