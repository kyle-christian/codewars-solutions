// Description:

// Inspired by the development team at Vooza, write the function that

//     accepts the name of a programmer, and
//     returns the number of lightsabers owned by that person.

// The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

// Note: your function should have a default parameter.

// For example(Input --> Output):

// "anyone else" --> 0
// "Zach" --> 18

/* 

PARAMETERS:
given the name

RESULTS:
return how many lightsabers they own

EXAMPLES:
everyone is 0 except for Zach, who owns 18

PSEUDOCODE:
conditional and use .toLowerCase()

*/

function howManyLightsabersDoYouOwnAlt(name) {
    if (name == "Zach") {
        return 18;
    } else {
        return 0;
    }
}

// more elegant

const howManyLightsabersDoYouOwn = name => name == "Zach" ? 18 : 0;