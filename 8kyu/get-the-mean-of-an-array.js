// Description:

// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

/* 

PARAMETERS:
given an array of numbers

RESULTS:
return the mean

EXAMPLES:
    Test.assertEquals(getAverage([2,2,2,2]),2);
    Test.assertEquals(getAverage([1,2,3,4,5,]),3);
    Test.assertEquals(getAverage([1,1,1,1,1,1,1,2]),1);

PSEUDOCODE:
reduce and then divide by the length of the array. use Math.floor to round down
*/

const getAverage = marks => {
    let sum = marks.reduce( (c, acc) => c + acc, 0);

    return Math.floor(sum / marks.length);
}

console.log(getAverage([1,1,1,1,1,1,1,2]))

