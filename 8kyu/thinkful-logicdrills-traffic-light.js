// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, when the input is green, output should be yellow.

/* 

PARAMETERS:
given the string green, yellow, red

RESULTS:
code a function that returns the next light from the given light

EXAMPLES:
    assert.strictEqual(updateLight("green"), "yellow");
    assert.strictEqual(updateLight("yellow"), "red");
    assert.strictEqual(updateLight("red"), "green");

PSEUDOCODE:
use a conditional or switch case

*/

const updateLight = current => {
    switch(current) {
        case'green':
            return 'yellow'
        case 'yellow':
            return 'red'
        case 'red':
            return 'green'
    }
}