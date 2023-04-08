// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

/* 

PARAMETERS:
given an integer and a limit

RESULTS:
return an array of the multiples of the integer (including) up to the limit (not including)

EXAMPLES:
  assert.sameOrderedMembers(findMultiples(5, 25), [5, 10, 15, 20, 25])
  assert.sameOrderedMembers(findMultiples(1, 2), [1, 2])
  assert.sameOrderedMembers(findMultiples(5, 7), [5])
  assert.sameOrderedMembers(findMultiples(4, 27), [4, 8, 12, 16, 20, 24])
  assert.sameOrderedMembers(findMultiples(11, 54), [11, 22, 33, 44])

PSEUDOCODE:
declare empty array
for loop that pushes multiples?

*/

function findMultiples(integer, limit) {
    let arr = []
    for (let i = integer; i <= limit; i++) {
        if (i % integer == 0) {
            arr.push(i)
        }
    }

    console.log(arr);
    return arr;
}

findMultiples(5, 25);

// FIRST TRYYYY LETS GOOOOO

// clever solution

function findMultiplesAlt(int,limit){
    return Array(Math.floor(limit/int)).fill(1).map((x,i)=>int*(i+1));
}

/* 

return an array where the limit is / by the int.

fill the spaces with 1

but map it where... I'm going to be honest I don't completely understand the code. The i argument is throwing me off. Oh nevermind, it could be the index. I think I understand. For that index within the array, replace it with the integer times the index plus 1?

*/