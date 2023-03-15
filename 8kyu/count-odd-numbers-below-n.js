// Given a number n, return the number of positive odd numbers below n, EASY!
// Examples (Input -> Output)

// 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])

// Expect large Inputs!

/* 

PARAMETERS:
given n

RESULTS:
return the number of positive odd numbers not including n --> n % 2 == 1

EXAMPLES:
7  -> 3 (because odd numbers below 7 are [1, 3, 5])
15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])

PSEUDOCODE:

use a for/while loop passing in n as the argument

*/

function oddCountFailed(n) {
    let count = 0;

    for (let i = 0; i < n; i++) {
        if (i % 2 == 1) {
            count++;
        }
    }

    return count;
}

// tried this as my solution but the code took too long to execute, meaning there is a more efficient way of doing this without taking up all that computing resource!

const oddCount = n => Math.floor(n/2);