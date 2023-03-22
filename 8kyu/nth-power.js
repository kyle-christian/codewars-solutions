// This kata is from check py.checkio.org

// You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

// Let's look at a few examples:

//     array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
//     array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.

/* 

PARAMETERS:
given an array and n

RESULTS:
return the power of the number in the array index ** n
if the index doesn't exist within the array, return -1

EXAMPLES:
    assert.strictEqual(index([1, 2, 3, 4],2),9);
    assert.strictEqual(index([1, 3, 10, 100],3),1000000);
    assert.strictEqual(index([1, 2],3),-1);
    assert.strictEqual(index([1,1,1,1,1,1,1,1,1,1], 9),1);
    assert.strictEqual(index([1,1,1,1,1,1,1,1,1,2], 9),512);
    assert.strictEqual(index([29,82,45,10], 3),1000);
    assert.strictEqual(index([6,31], 3),-1);
    assert.strictEqual(index([75,68,35,61,9,36,89,0,30], 10),-1);

PSEUDOCODE:

*/


const index = (array, n) => isNaN(array[n]) ? -1 : array[n] ** n;

index([1,2,3,4], 2)

// learned a new method today! isNan()!!!

// in terms of readability though this is a lot better

const indexAlt = (array, n) => array[n] ** n || -1; 