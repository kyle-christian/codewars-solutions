// Description:

// Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

// setAlarm(true, true) -> false
// setAlarm(false, true) -> false
// setAlarm(false, false) -> false
// setAlarm(true, false) -> true

/* 

PARAMETERS:
given a boolean for each employed and vacation

RESULTS:
return true if employed is true and vacation is set to false. all other instances should return false

EXAMPLES:
setAlarm(true, true) -> false
setAlarm(false, true) -> false
setAlarm(false, false) -> false
setAlarm(true, false) -> true


PSEUDOCODE:
use a conditional to check if employed is true and vacation is set to false. all other instances should return false

*/

function setAlarm(employed, vacation) {
    if (employed == true && vacation == false) {
        return true;
    } else {
        return false;
    }
}

// alternative solution using a ternary operator

const setAlarmAlt = (e, v) => e == true && v == false ? true : false;

// even better alternative

const setAlarmAltAlt = (e, v) => e && !v;