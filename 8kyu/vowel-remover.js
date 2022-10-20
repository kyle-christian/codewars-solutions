// Description:

// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
// Examples

// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"

//     don't worry about uppercase vowels
//     y is not considered a vowel for this kata

/* 

PARAMETERS:

RESULTS:

EXAMPLES:

PSEUDOCODE:

*/

function shortcut(string) {
  strArr = string.split("");
  vowels = [];

  for (let i = 0; i < strArr.length; i++) {
    switch (strArr[i]) {
      case "a":
        strArr.splice(i, 1);
        break;
      case "e":
        strArr.splice(i, 1);
        break;
      case "i":
        strArr.splice(i, 1);
        break;
      case "o":
        strArr.splice(i, 1);
        break;
      case "u":
        strArr.splice(i, 1);
        break;
      default:
        continue;
    }
  }

  return strArr.join("");
}

console.log(shortcut("how are you today?"));

// elegant solution

function shortcutAlt(str) {
  return str
    .split("")
    .filter(function (e) {
      return ["a", "e", "i", "o", "u"].indexOf(e) == -1;
    })
    .join("");
}
