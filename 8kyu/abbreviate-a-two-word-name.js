// Description:

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

/* 

PARAMETERS:
given a string of two words with one space in between them

RESULTS:
two capital letters with a dot separating them

EXAMPLES:
// Sam Harris => S.H

// patrick feeney => P.F

PSEUDOCODE:
take string, turn into array, take out [0][1] and [1][1] from array and make sure to capitalize it. return in a new string

*/

const abbrevName = name => `${name.split(' ')[0][0].toUpperCase()}.${name.split(' ')[1][0].toUpperCase()}`;

console.log(abbrevName("sam thomas"));

//elegant solution

const abbrevNameAlt = name => name.split(' ').map(i => i[0].toUpperCase()).join('.');