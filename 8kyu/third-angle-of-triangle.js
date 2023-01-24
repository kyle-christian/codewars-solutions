// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

/* 

PARAMETERS:
given 2 angles of a triangle

RESULTS:
return the third

EXAMPLES:
    assert.strictEqual(otherAngle(30, 60), 90);
    assert.strictEqual(otherAngle(60, 60), 60);
    assert.strictEqual(otherAngle(43, 78), 59);
    assert.strictEqual(otherAngle(10, 20), 150);

PSEUDOCODE:
subtract the given angles from 180 and return the result

*/

const otherAngle = (a, b) => 180 - (a + b);