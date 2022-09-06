// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

//my solution

function positiveSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            sum += 0;
        } else {
            sum += arr[i];
        }
    }

    return sum;
}

positiveSum([1,-4,7,12])

//elegant solution

function positiveSumAlt(arr) {
    return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}