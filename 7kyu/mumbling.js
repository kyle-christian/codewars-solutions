// Description:

// This time no story, no theory. The examples below show you how to write function accum:
// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// The parameter of accum is a string which includes only letters from a..z and A..Z.


/* 

PARAMETERS:
given a string

RESULTS:
take the string and depending of the index, multiply the amount of letters by the index that it is in
the index[0] of each string must be capitalized while the rest are lowercase.

EXAMPLES:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

PSEUDOCODE:
1) take the string and split into an array
2) use repeat to repeat the string with its index
join back the array with '-'

*/

const accum = s => {
    let str = '';
    for (let i = 0; i < s.length; i++) {
        str += s[i].toUpperCase() + s[i].toLowerCase().repeat(i) + (i !== s.length - 1 ? '-' : '');
    }
    return str;
}

console.log(accum('abcdefghijk'));

//elegant solution but it's not very readable

const accumAlt = s => {
    return s.split('').map( (el, i) => (el.toUpperCase() + el.toLowerCase().repeat(i))).join('-');
}

