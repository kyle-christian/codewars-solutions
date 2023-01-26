// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// Example(Input1, Input2 --> Output):

// 6, 10 --> 32
// 3, 3 --> 9

// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

/*

PARAMETERS:
given a length and a width

RESULTS:
if l == w, assume it is a square and return its area
if l /= w, assume it is a rectangle, return its perimeter

EXAMPLES:
    assert.strictEqual(areaOrPerimeter(3,  3),  9);
    assert.strictEqual(areaOrPerimeter(6, 10), 32);

PSEUDOCODE:
use a conditional to determine whether it is a square or rectangle, then proceed with either the perimeter or area.

for perimeter, multiply the length and width by itself and add to a total

for area, multiply length and width together

*/

const areaOrPerimeter = function(l, w) {
    if (l == w) {
        return l * w;
    } else {
        return (l * 2) + (w * 2)
    }
}

// using a ternary operator

const areaOrPerimeterAlt = function(l, w) {
    return l == w ? l * w : 2 * (l + w)
}