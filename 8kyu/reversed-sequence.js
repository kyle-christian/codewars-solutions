// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]


const reverseSeq = n => {
    const arr = [];

    for (let i = n; n > 0; n--) {
        arr.push(n)
    }

    return arr;
}

console.log(reverseSeq(5))