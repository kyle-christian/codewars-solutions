// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
// Examples

// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

/* 

PARAMETERS:
given the number

RESULTS:
return a list of all the powers of 2 going from 0 to n

EXAMPLES:
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]


PSEUDOCODE:
use a for loop

*/

function powersOfTwo(n) {
    let arr = []

    for (let i = 0; i <= n; i++) {
        arr.push(2 ** i)
    }

    return arr
}

powersOfTwo(0)

// a super clever solution that I don't quite understand yet...

function powersOfTwoAlt(n) {
    return Array.from({ length: n + 1}, (v, k) => 2 ** k);
}

// another clever solution that I can understand more clearly

function powersOfTwoAltAlt(n) {
    return [...Array(n + 1).map((_, i) => 2 ** i)]
}

// although I feel like these two solutions are less readable than my original one but I haven't put "Time on the saddle", as Primogen would say.