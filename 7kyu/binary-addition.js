// Binary Addition

// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

//my spaghetti solution

function addBinary(a, b) {
    let sum = +a + +b;
    return (sum >>> 0).toString(2);
}

addBinary('11101110100100110011000111100010')

// function addBinary (a, b) {
//     let sum = 0;
//     if (typeof a === 'string', || typeof b === 'string') {
//         sum = parseInt(a + b, 2);
//     } else {
//         sum = a + b;
//         sum = (sum >>> 0).toString(2);
//     }

//     return sum;
// }

function addBinary (a, b) {
    let sum = 0;
    if (typeof a, b === 'string') {
        sum = parseInt(a + b, 2);
    } else {
        sum = a + b;
    }
    return (sum >>> 0).toString(2);
}

addBinary('11101110100100110011000111100010')

function toInt(a) {
    let sum = 0
    return parseInt(a, 2);
}

toInt('11101110100100110011000111100010')

//the actual solution

function addBinary (a, b) {
    return (a+b).toString(2)
}

// .-.