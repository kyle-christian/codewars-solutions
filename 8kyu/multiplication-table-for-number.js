// Your goal is to return multiplication table for number that is always an integer from 1 to 10.

// For example, a multiplication table (string) for number == 5 looks like below:

// 1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 = 15
// 4 * 5 = 20
// 5 * 5 = 25
// 6 * 5 = 30
// 7 * 5 = 35
// 8 * 5 = 40
// 9 * 5 = 45
// 10 * 5 = 50

// P. S. You can use \n in string to jump to the next line.

// Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.

/* 

PARAMETERS:
given an integer between/including 1 - 10

RESULTS:
return a multiplication table

EXAMPLES:
refer to above

PSEUDOCODE:
use a for loop to enumerate from 1-10 and then multiply by the given integer, either return or console log result

*/

function multiTable(number) {
    let str = ""

    for(let i = 1; i <= 10; i++) {
        str += `${i} * ${number} = ${i * number}`
        if (i < 10) str += "\n"
    }

    return str
}

console.log(multiTable(5))