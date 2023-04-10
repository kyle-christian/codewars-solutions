// Description:

//     Kids drink toddy.
//     Teens drink coke.
//     Young adults drink beer.
//     Adults drink whisky.

// Make a function that receive age, and return what they drink.

// Rules:

//     Children under 14 age.
//     Teens under 18 age.
//     Young under 21 age.
//     Adults have 21 or more.

// Examples: (Input --> Output)

// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"

/* 

PARAMETERS:
given the age

RESULTS:
return what they drink

EXAMPLES:
13 --> "drink toddy"
17 --> "drink coke"
18 --> "drink beer"
20 --> "drink beer"
30 --> "drink whisky"

PSEUDOCODE:
switch statement or a variation of the if/else
*/

function peopleWithAgeDrink(age) {
    if (age >= 21) return 'drink whisky';
    if (age >= 18) return 'drink beer';
    if (age >= 14) return 'drink coke';
    if (age < 14) return 'drink toddy';
}

// beautiful solution

const peopleWithAgeDrinkAlt = age => {
    age < 14 ? 'drink toddy' :
    age < 18 ? 'drink coke' :
    age < 21 ? 'drink beer' : 'drink whisky';
}