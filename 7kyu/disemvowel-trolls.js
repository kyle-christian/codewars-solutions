// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

/*

PARAMETERS:
you are given a sentence string

RESULTS:
take the string and remove the vowels from it

EXAMPLES:
    assert.strictEqual(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!")
    assert.strictEqual(disemvowel("No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
    assert.strictEqual(disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?")

PSEUDOCODE:
take the string and turn it into an array. use some sort of filter to enumerate through the array and take out the vowels. join the array together again and return it

*/

// const disemvowel = str => {
//     return str.split(' ').map( e => e.replace(/[aeiou]/gi, '')).join(' ');
// }

console.log(disemvowel("This website is for losers LOL!"));

//refactored

const disemvowel = str => str.split(' ').map( e => e.replace(/[aeiou]/gi, '')).join(' ')

// lmao

disemvowel = str => str.replace(/[aeiou]/gi,'');