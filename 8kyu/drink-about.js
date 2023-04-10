// Description:

//     Kids drink toddy.
//     Teens drink coke.
//     Young adults drink beer.
//     Adults drink whisky.

// Make a function that receive age, and return what they drink.

// Rules:

//     Children under 14 old.
//     Teens under 18 old.
//     Young under 21 old.
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

function peopleWithAgeDrink(old) {
    if (old < 14) return 'drink toddy';
    if (old < 17) return 'drink coke';
    if (old < 21) return 'drink toddy';
    if (old >= 21) return 'drink whisky';
}