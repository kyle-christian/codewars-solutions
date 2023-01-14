// Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

// Example:

// sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')

// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!

/* 

PARAMETERS:
given an array and two arguments

RESULTS:
combine the name in the array to say 'Hello, a b! Welcome to, city, state!'

EXAMPLES:
    assert.strictEqual(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'), 'Hello, John Smith! Welcome to Phoenix, Arizona!')
    assert.strictEqual(sayHello(['Franklin','Delano','Roosevelt'], 'Chicago', 'Illinois'), 'Hello, Franklin Delano Roosevelt! Welcome to Chicago, Illinois!')
    assert.strictEqual(sayHello(['Wallace','Russel','Osbourne'],'Albany','New York'), 'Hello, Wallace Russel Osbourne! Welcome to Albany, New York!')

PSEUDOCODE:
combine the array using join(' ') and use backticks for the whole string
*/

function sayHello(name, city, state) {
    return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}

sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')