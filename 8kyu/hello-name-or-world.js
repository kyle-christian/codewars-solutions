// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// Examples:

// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given 
//   or `name` = ""        => return "Hello, World!"

/* 

PARAMETERS:
given a name

RESULTS:
return either hello world if the name is blank or their name if it is provided. also restructure the name so that it returns proper instead of garbled

EXAMPLES:
* With `name` = "john"  => return "Hello, John!"
* With `name` = "aliCE" => return "Hello, Alice!"
* With `name` not given 
  or `name` = ""        => return "Hello, World!"

PSEUDOCODE:
conditional .toUpperCase() .toLowerCase .split('')

*/

const hello = n => n ? `Hello, ${n[0].toUpperCase() + n.substring(1).toLowerCase()}!` : 'Hello, World!';

// was having constant errors from the code that I could not figure out. turns out n != '' is not valid logic and I can just put the variable there and the code determines whether it's truthy or falsy with no additional input. This was frustrating but also a good learning experience!

// alternate

const helloAlt = n => `Hello, ${n ? (n[0].toUpperCase() + n.slice(1).toLowerCase()) : 'World'}!`