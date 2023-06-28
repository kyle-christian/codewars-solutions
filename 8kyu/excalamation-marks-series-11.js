// Description:

// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
// Examples

// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

/* 

PARAMETERS:
given a string

RESULTS:
if it contains any vowels, turn it into an exclamation point

EXAMPLES:
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

PSEUDOCODE:
the most obvious solution would be regex but I'm sure there's a way to solve this without it.



*/
const replace = s => s.replace(/[aeiou]/gi, "!")

replace("heallo there!")

