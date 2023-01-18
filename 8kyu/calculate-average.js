// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

const findAverage = arr => if (arr.length > 0) {
    arr.reduce( (total, amount) => total + amount, 0 ) / arr.length;
    }
    else {
        return 0
    }

findAverage([1, 2, 3])