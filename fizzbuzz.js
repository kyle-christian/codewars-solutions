//USING PREP

//A number 1 to number, if 3 fizz, if 5 buzz, if 3&5 fizzbuzz
//P: num, whole, positive
//R: console
//E:

function fizzBuzz(num) {
    //loop 
    for (let i = 1; i <= num; i++) {
        let output = "";
        //conditionals %3&5, % 3, 5, %3&5
        if (i % 3 === 0) output += 'Fizz';
        if (i % 5 === 0) output += 'Buzz';
        //console.log num or fizz, buzz, fizzBuzz
        console.log(output || i);
    }
}

fizzBuzz(5) // 1, 2, fizz, 4, buzz
fizzBuzz(3) // 1, 2, fizz
fizzBuzz(15) // 1, 2, fizz, 4, buzz, 6, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzBuzz