// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(arr) {
    if (arr.length > 0) {
        return arr.reduce( (total, amount) => total + amount, 0 ) / arr.length;
    } else {
        return 0;
    }
}

findAverage([1, 2, 3])