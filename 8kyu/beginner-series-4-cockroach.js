// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30

// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

/* 

PARAMETERS:
given a speed in km per hour

RESULTS:
convert it to cm per second, rounded down to the nearest integer

EXAMPLES:
    assert.strictEqual(cockroachSpeed(1.08), 30);
    assert.strictEqual(cockroachSpeed(1.09), 30);
    assert.strictEqual(cockroachSpeed(0), 0);

PSEUDOCODE:
find the formula and use as a return for the code. use Math.floor to round the number to the nearest integer

the formula is km/h ÷ 0.036 = cm/s

*/

const cockroachSpeed = s => Math.floor(s/0.036)