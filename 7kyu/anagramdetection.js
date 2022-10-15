// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
// Examples

//     "foefet" is an anagram of "toffee"

//     "Buckethead" is an anagram of "DeathCubeK"

/* 

PARAMETERS:
given the parameters of the test and the original

RESULTS:
compare both strings and return true if the original is an anagram of the test, otherwise return false

EXAMPLES:


    "foefet" is an anagram of "toffee"

    "Buckethead" is an anagram of "DeathCubeK"


PSEUDOCODE: 
i want to split the strings into an array and then independently test each character if it matches to the original string

*/

//this solution passed all the user tests but not the random ones :(

var isAnagramOld = function (test, original) {
  testArr = [...test.toLowerCase()];
  ogArr = [...original.toLowerCase()];
  check = [];

  for (let i = 0; i < original.length; i++) {
    if (ogArr.includes(testArr[i])) {
      check.push(testArr[i]);
    } else {
      check.push(false);
    }
  }

  if (check.includes(false)) {
    return false;
  }

  if (original.length != test.length) {
    return false;
  }

  return true;
};

//this is where knowing methods is super important

var isAnagram = function (test, original) {
  return (
    test.toLowerCase().split("").sort().join("") ===
    original.toLowerCase().split("").sort().join("")
  );
};

console.log(isAnagram("Buckethead", "DeathCubeK"));

// here's a solution where they create a prototype function

String.prototype.sortLetters = function () {
  return this.toLowerCase().split("").sort().join("");
};

var isAnagramAlt = function (test, original) {
  return test.sortLetters() === original.sortLetters();
};
