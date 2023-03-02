// Debugging sayHello function

// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

// Example output:

// Hello, Mr. Spock

function sayHelloPrompt(name) {
    return 'Hello'
}

// because we want the message to say hello dynamically to the given parameter of name, we want to omit the usage of single quotation marks and instead use backticks. By using backticks we can enter the variable directly into the quotations. Alternatively we can concatenate the name variable after the quotation

const sayHelloAlt = name => `Hello, ${name}`;

const sayHello = name => 'Hello, ' + name;
