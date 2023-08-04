// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105

// Zero alone is fine, don't worry about it. Poor guy anyway

/* 

PARAMETERS:
given a number

RESULTS:
return the number without the zero at the end if it contains it

EXAMPLES:
// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105

PSEUDOCODE:
split into an array, if arr[array.length - 1] == 0, pop it

*/

function noBoringZeros(n) {
    let arr = [...String(n)]

    while (arr[arr.length - 1] == 0) {
        arr.pop()
    }

    return +arr.join('')
}

noBoringZeros(14500000)