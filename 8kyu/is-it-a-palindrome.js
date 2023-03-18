// Write a function that checks if a given string (case insensitive) is a palindrome.

/* 

PARAMETERS:
given x

RESULTS:
return true for palindrome, false if not (case insensitive)

EXAMPLES:
  it("Testing for 'a'", () => assert.strictEqual(isPalindrome("a"), true));
  it("Testing for 'aba'", () => assert.strictEqual(isPalindrome("aba"), true));
  it("Testing for 'Abba'", () => assert.strictEqual(isPalindrome("Abba"), true));
  it("Testing for 'hello'", () => assert.strictEqual(isPalindrome("hello"), false));
  it("Testing for 'Bob'", () => assert.strictEqual(isPalindrome("Bob"), true));
  it("Testing for 'Madam'", () => assert.strictEqual(isPalindrome("Madam"), true));
  it("Testing for 'AbBa'", () => assert.strictEqual(isPalindrome("AbBa"), true));
  it("Testing for ''", () => assert.strictEqual(isPalindrome(""), true));

PSEUDOCODE:
let reverse = .split().reverse().join() and compare to original x

use conditional

*/

const isPalindrome = x => x.toLowerCase() == x.split('').reverse().join('').toLowerCase() ? true : false;