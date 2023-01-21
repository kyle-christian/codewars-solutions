// Description:

// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.
// Examples (Input -> Output)

// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5

// Notes

//     You may consider that there will not be any empty arrays/vectors.

/* 

PARAMETERS:
given an array of integers

RESULTS:
create two functions that return the maximum value as well as the minimum

EXAMPLES:
* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5

PSEUDOCODE:
set a variable max/min and tie it to arr[0]. use a for loop to compare the current iteration to arr[0]. if the value is more/less, set that value to max/min and continue the iteration until the desired value is found, then return value.

or you could use the built in Math. methods

*/

function max(list) {
    return Math.max(...list);
}

function min(list) {
    return Math.min(...list);
}

max([5, 6, 8, 3])

// arrow function solution looks cleaner

const minAlt = list => Math.min(...list);
const maxAlt = list => Math.max(...list);