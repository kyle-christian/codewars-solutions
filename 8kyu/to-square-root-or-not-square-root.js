// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.
// Example

// [4,3,9,7,2,1] -> [2,9,3,49,4,1]

// Notes

// The input array will always contain only positive numbers, and will never be empty or null.

/*

PARAMETERS:
given an array

RESULTS:
enumerate over the array and determine whether it can be square rooted or not. If yes, then do so, otherwise, square it

EXAMPLES:
[4,3,9,7,2,1] -> [2,9,3,49,4,1]

PSEUDOCODE:
maybe conditional within a for loop or .map for the new array

*/

function squareOrSquareRoot(arr) {
    let newArr = []
    
    for (let i = 0; i < arr.length - 1; i++) {
        if (Number.isInteger(Math.sqrt(arr[i])) == true) {
            console.log('true');
            newArr.push(Math.sqrt(arr[i]));
        } else {
            console.log('false')
            newArr.push(arr[i] ** 2)
        }
    }

    console.log(newArr);
    return newArr;
}

/* 

my solution: I could have used .map to simplify the code for the first draft this is okay. 
    - Establish a variable for the new arr as newArr. 
    - Set up a for loop that enumerates through the given array
    - conditional set up to test if each number on the index is a full integer ( Number.isInteger(value) ) which takes in the Math.sqrt(arr[i]) and tests if it is truthy
    - if yes, push that square root onto the new array
    - else, exponentiate it by two
    - finally return the new array with the updated values

*/ 

// cleaner solution

function squareOrSquareRootAlt(array) {
    return array.map(x => {
        const r = Math.sqrt(x);
        return Number.isInteger(r) ? r : r**2;
    });
};

// i didn't know you could do a double return or even declare a constant through a map. very interesting but yeah this trims the code a lot compared to my solution. very readable too.