// Description:

// The company you work for has just been awarded a contract to build a payment gateway. In order to help move things along, you have volunteered to create a function that will take a float and return the amount formatting in dollars and cents.

// 39.99 becomes $39.99

// The rest of your team will make sure that the argument is sanitized before being passed to your function although you will need to account for adding trailing zeros if they are missing (though you won't have to worry about a dangling period).

// Examples:

// 3 needs to become $3.00

// 3.1 needs to become $3.10

// Good luck! Your team knows they can count on you!

/* 

PARAMETERS:
given a number

RESULTS:
return that number in money form accounting for trailing zeros if it doesn't have any

EXAMPLES:
3 needs to become $3.00

3.1 needs to become $3.10

PSEUDOCODE:
set up conditionals depending on the string.length() and convert the number to a string use padEnd() to add trailing zeros

*/

function formatMoney(amount) {
    return `$${amount.toFixed(2)}`
}

formatMoney(3.1)

let formatMoneyAlt = amount => `$${amount.toFixed(2)}`