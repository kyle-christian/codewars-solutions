// Description: Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// doubleChar("String") ==> "SSttrriinngg"

// doubleChar("Hello World") ==> "HHeelllloo WWoorrlldd"

// doubleChar("1234!_ ") ==> "11223344!!__ "

/* 

PARAMETERS:

given a string

RESULTS:
return the string in which each character (case-sensitive) is repeated once

EXAMPLES:
doubleChar("String") ==> "SSttrriinngg"

doubleChar("Hello World") ==> "HHeelllloo WWoorrlldd"

doubleChar("1234!_ ") ==> "11223344!!__ "

PSEUDOCODE: use a for loop to enumerate through the string and copy it onto a new variable by repeating the character once each

*/

function doubleChar(str) {
    let newStr = '';
    
    for (let i = 0; i < str.length; i++) {
        newStr += str[i] + str[i]
    }

    return newStr;
}

// alternative solution

const doubleCharAlt = str => str.split('').map(c => c + c).join('');