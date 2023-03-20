// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

//     "I love you"
//     "a little"
//     "a lot"
//     "passionately"
//     "madly"
//     "not at all"

// If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.

/* 

PARAMETERS:
given petals

RESULTS:
return the answer based on the amount of petals torn

EXAMPLES:
    assert.strictEqual(howMuchILoveYou(7),"I love you")
    assert.strictEqual(howMuchILoveYou(3),"a lot")
    assert.strictEqual(howMuchILoveYou(6),"not at all")

PSEUDOCODE:
put the responses in an array and a for loop that counts down to 0, use conditional

*/

function howMuchILoveYou(nbPetals) {
    let responses = ['not at all', 'I love you', 'a little', 'a lot', 'passionately', 'madly',]
    let count = 0;
    let answer = ''

    for (let i = 0; i < nbPetals; i++) {
        count++;
        if (count > 6) {
            nbPetals = Math.abs(nbPetals - 6)

            console.log(nbPetals);
            i = 0
            count = 0 + nbPetals;
        }
        answer = responses[i];
    }
    console.log(answer);
    return answer;
}

// function howMuchILoveYou(petals) {
//     let responses = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']

//     for (let i = petals; i > 0; i--) {

//     }
// }


// I was trying to involve to many moving parts that I got lost in the sauce tbh. here's a solution I found online because this one stumped me. well done!

function howMuchILoveYouAlt(nbPetals) {
    const phrases = [
        'not at all',
        'I love you',
        'a little',
        'a lot',
        'passionately',
        'madly'
        ]

        console.log(nbPetals % phrases.length)
        console.log(phrases [nbPetals % phrases.length])
        return phrases [nbPetals % phrases.length];
}

howMuchILoveYou(7);

// i see the problem now... it was the order that I had to set up for in the array