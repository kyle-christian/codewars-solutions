// Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.

/* 

PARAMETERS:
given a length, width, and height

RESULTS:
write a function that finds the volume of the cuboid

EXAMPLES:
    assert.strictEqual(Kata.getVolumeOfCuboid(1,2,2),  4);
    assert.strictEqual(Kata.getVolumeOfCuboid(6,2,5), 60);

PSEUDOCODE:
multiply all the values together to get the sum

*/

class Kata {
    static getVolumeOfCuboid(length, width, height) {
      return length * width * height
    }
  }