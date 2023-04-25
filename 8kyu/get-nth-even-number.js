// Return the Nth Even Number

// Example(Input --> Output)

// 1 --> 0 (the first even number is 0)
// 3 --> 4 (the 3rd even number is 4 (0, 2, 4))
// 100 --> 198
// 1298734 --> 2597466

// The input will not be 0.

/* 

PARAMETERS:
given a number

RESULTS:
find the even number based on the initial number given

EXAMPLES:
1 --> 0 (the first even number is 0)
3 --> 4 (the 3rd even number is 4 (0, 2, 4))
100 --> 198
1298734 --> 2597466

PSEUDOCODE:
probably can do it in a single line, involves basic mathematics

*/

function nthEven(n) {
    let init = 0

    if (n == 1) {
        return init;
    } else {
        return init = (n * 2) - 2;
    }
}

// used conditional to figure out the logic first but conditional is completely unnecessary. in fact, code can be simplified to a single line just as I said above.

const nthEvenAlt = n => (n * 2) - 2;