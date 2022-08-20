// Description:

// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
// Examples(Operator, value1, value2) --> output

// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

/* 

PARAMETERS:
take three arguments
1. operation
2. value 1
3. value 2

RESULTS:
return result of numbers after applying the chosen operation

EXAMPLES:
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

PSEUDOCODE:


*/

const basicOp = (operation, value1, value2) => {
    switch(operation) {
        case '+': return value1 + value2
        case '-': return value1 - value2
        case '*': return value1 * value2
        case '/': return value1 / value2
        default: return 0;
    }
}

console.log(basicOp('+', 4, 7))

// elegant solution

const basicOpAlt = (o, a, b) => eval(a + o + b);