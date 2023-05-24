// Complete the function which converts a binary number (given as a string) to a decimal number.

/*

PARAMETERS: given a binary number (given as a string)

RESULTS:
convert it to its decimal part

EXAMPLES:
[ ["1",1], ["0",0], ["1001001", 73] ].forEach( ([inp, exp]) => Test.assertEquals( binToDec(inp), exp ) )

PSEUDOCODE:
use parseInt() function to convert

*/

const binToDec = bin => parseInt(bin, 2);