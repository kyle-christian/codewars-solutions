// Description:
// Don't give me five!

// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

// Examples:

// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12

// The result may contain fives. ;-)
// The start number will always be smaller than the end number. Both numbers can be also negative!

// I'm very curious for your solutions and the way you solve it. Maybe someone of you will find an easy pure mathematics solution.

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!

/* 

PARAMETERS:
given the start number and end number as parameters

RESULTS:
return the count of all the numbers except numbers with a 5 in it. 
- Start and end are inclusive
- both numbers can be negative

EXAMPLES:
1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12

PSEUDOCODE:
1) take both parameters use a for loop to loop through the start to end
2) take the current iteration
    - turn to a string
    - split string into an array and save to a variable
3) declare another variable that filters through the array for '5'. If no 5 present increment a count
4) return the count

*/

const dontGiveMeFive = (start,end) => {
    let count = 0;

    for (let i = start; i <= end; i++) {
        const arr = i.toString().split('');
        const fiveFilter = arr.filter(num => num == '5');
        if (fiveFilter == 0) {
            count++;
        }
    }

    return count;
}


//elegant solution

const dontGiveMeFiveAlt = (start, end) => {
    let res = []
    for (let i = start; i <= end; i++) {
        if (!i.toString().includes('5')) res.push(i);
    }

    return res.length;
}

console.log(dontGiveMeFiveAlt(1, 25));