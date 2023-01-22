// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// Constraint:

//     1 <= month <= 12


/* 

PARAMETERS:
given an integer corresponding to a month

RESULTS:
return which quarter it belongs to as an integer number

EXAMPLES:
    assert.strictEqual(quarterOf(3), 1)
    assert.strictEqual(quarterOf(8), 3)
    assert.strictEqual(quarterOf(11), 4)

PSEUDOCODE:
use a switch case

switch case ended up being too tedious so I opted to use an if/else chain instead

*/

const quarterOf = month => {
    if (month < 4) {
        return 1
    } else if (month < 7) {
        return 2
    } else if (month < 10) {
        return 3
    } else {
        return 4
    }
}

quarterOf(2)

//alternative solution using math.ceil

const quarterOfAlt = m => Math.ceil(m/3);