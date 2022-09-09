// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

//count number of vowels in a given string. each vowel counts for one point

//return count

//my solution

const getCount = str => {
    let sum = 0;
    let arr = str.split('');

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'a') {
            sum++
        }
        if (arr[i] === 'e') {
            sum++
        }
        if (arr[i] === 'i') {
            sum++
        }
        if (arr[i] === 'o') {
            sum++
        }
        if (arr[i] === 'u') {
            sum++
        }
    }
    return sum;
}

getCount('abracadabraeiou');

//alternate solution using regex

const getCountAlt = str => str.match(/[aeiou]/gi || []).length;

getCountAlt('abracadabraeiou');

//another alternate solution without regex

const getCountAltAlt = str => {
    var sum = 0;
    var vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < str.length; i++) {
        for(let j = 0; j < vowels.length; j++) {
            if (str[i] === vowels[j]) {
                sum++;
            }
        }
    }

    return sum;
}

getCountAltAlt('abracadabraeiou');