// Description:

// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

/* 

PARAMETERS:
given two parameters: animal's name and the dish they're bringing.
    - always lowercase
    - each param has at least two letters
    - may contain hyphens and spaces but will not appear at the beginning or end
    - no integers

RESULTS:
return a boolean to indicate whether the beast's name matches their dish

EXAMPLES:
Test.assertEquals(feast("great blue heron", "garlic naan"), true)
Test.assertEquals(feast("chickadee", "chocolate cake"), true)
Test.assertEquals(feast("brown bear", "bear claw"), false)

PSEUDOCODE: 
    - take the first and last char of the beast param
    - compare to the first and last char of dish
    - if === return true else false

*/

const feast = (beast, dish) => {
    if (beast.charAt(0) === dish.charAt(0) 
    && beast.charAt(beast.length - 1) === dish.charAt(dish.length - 1)) {
        return true
    } else {
        return false;
    }
}

console.log(feast("brown bear", "bear claw"));

//elegant solution

const feastAlt = (beast, dish) => beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1];