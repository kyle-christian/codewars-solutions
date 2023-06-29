// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

/*

PARAMETERS:

RESULTS:

EXAMPLES:

PSEUDOCODE:

*/

function getSize(width, height, depth) {
    const surfaceArea = (2 * depth * width) + (2 * depth * height) + (2 * width * height);
    const volume = width * height * depth;

    console.log([surfaceArea,volume]);

    return [surfaceArea, volume];
}

getSize(4, 2, 6);