// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

// Can you help her?

/*

function greet(name){
  return "Hello, " + name + "!";
  if(name === "Johnny")
    return "Hello, my love!";
}

*/

// this function doesn't work as intended because Jenny returned the first statement before her secret message. By having an additional return, any block of code that happens after the first return will never be run. It would work as intended if Jenny coded her function as such:

function greet(name) {
    if (name === "Johnny") {
        return "Hello, my love!"
    } else {
        return "Hello, " + name + "!"
    }
}

// alternatively

const greetAlt = name => name === "Johnny" ? "Hello, my love!" : "Hello, " + name + "!"; 

//another alternative

function greetAltAlt(name) {
    return "Hello, " + (name == "Johnny" ? "my love" : name) + "!";
}