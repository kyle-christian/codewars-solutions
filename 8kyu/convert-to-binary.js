// Task Overview

// Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

// to_binary(1)  /* should return 1 */
// to_binary(5)  /* should return 101 */
// to_binary(11) /* should return 1011 */

// Example:

// toBinary(1)  /* should return 1 */
// toBinary(5)  /* should return 101 */
// toBinary(11) /* should return 1011 */

/* 

PARAMETERS:
given an integer

RESULTS:
return that integer in binary

EXAMPLES:
// toBinary(1)  /* should return 1 
// toBinary(5)  /* should return 101
// toBinary(11) /* should return 1011 

PSEUDOCODE:
some sort of method for binaries? .toString(2)

*/

function toBinary(n) {
    return Number(n.toString(2))
}

toBinary(1)

// simpler one-liner

const toBinary = n => +n.toString(2);