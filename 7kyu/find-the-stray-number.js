// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)
// Examples

// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

//filter?
//if element does not = to the greater amount of the other element, return the stray

function stray(numbers) {
    let sorted = numbers.sort()

    if (sorted[0] != sorted[1]) {
        return sorted[0]
    }
    
    return (sorted[sorted.length - 1])
}

stray([17, 17, 17, 3, 17, 17, 17])

const counts = {};
const sampleArray = [17, 17, 17, 3, 17, 17, 17];
sampleArray.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
console.log(counts)