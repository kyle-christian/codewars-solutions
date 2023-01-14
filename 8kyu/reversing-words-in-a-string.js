// Description:

// You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

// Example (Input --> Output)

// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"

/*

PARAMETERS:
given a string

RESULTS:
reverse the words in the string

EXAMPLES:
"Hello World" --> "World Hello"
"Hi There." --> "There. Hi"

PSEUDOCODE:
split the string into an array, reverse the order and then join it back together

*/

let reverse = string => string.split(' ').reverse().join(' ');

reverse("Hi There.")