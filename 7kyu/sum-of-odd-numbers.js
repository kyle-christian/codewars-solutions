// Given the triangle of consecutive odd numbers:

//              1               = 1 = 1^3
//           3     5            = 8 = 2^3
//        7     9    11         = 27 = 3^3
//    13    15    17    19      = 64 = 4^3
// 21    23    25    27    29   = 125 = 5^3
// ...

// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

//PARAMETERS: Input is the nth row, where n starts at 1

//RESULTS: sum of the numbers in row n

//EXAMPLES

// assert.strictEqual(rowSumOddNumbers(42), 74088);

//PSEUDOCODE

const rowSumOddNumbers = n => n ** 3;

console.log(rowSumOddNumbers(42));