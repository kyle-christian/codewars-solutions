// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

/* 

PARAMETERS:
given a string

RESULTS:
return a hashed string other than the last 4 indexes

EXAMPLES:
    Test.assertEquals(maskify('4556364607935616'), '############5616');
    Test.assertEquals(maskify('1'), '1');
    Test.assertEquals(maskify('11111'), '#1111');

PSEUDOCODE:
    could turn into an array and map
    maybe there's a way to do it with a string method

*/

function maskify(cc) {
    let arr = cc.split('')

    return arr.map( (element, index) => {
        if (index < arr.length - 4) {
            return "#"
        } else {
            return element
        }
    })
    .join('')
}

console.log(maskify('4556364607935616'))

const maskifyAlt = cc => cc
    .split('')
    .map( (element, index) => index < cc.length - 4 ? "#" : element)
    .join('');

console.log(maskifyAlt('4556364607935616'))

//elegant solution

function maskifyElegant(cc) {
    return cc.slice(-4).padStart(cc.length, '#')
}

console.log(maskifyElegant('skippy'))