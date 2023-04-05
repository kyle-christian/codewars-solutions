// If/else syntax debug

// While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive/CheckAlive/check_alive. Unfortunately, Greg made some errors while creating the function.

// checkAlive/CheckAlive/check_alive should return true if the player's health is greater than 0 or false if it is 0 or below.

// The function receives one parameter health which will always be a whole number between -10 and 10.

/*

PARAMETERS:
given the player's health

RESULTS:
return true if it is above 0 and false if not

EXAMPLES:
    Test.assertEquals(checkAlive(5), true)
    Test.assertEquals(checkAlive(0), false)

PSEUDOCODE:
debugging problem

*/

function checkAlive (health) {
    if (health > 0) {
      return true
    } else {
      return false
    }
}

/* 

PROBLEMS
1. the conditional argument was not within the paranthesis.
2. there was an additional paranthesis after the else statement which is not necessary if it is not an else if.
3. health was < 0 when it should be > 0
4. true and false were backwards.

*/