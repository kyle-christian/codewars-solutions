// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

//     S is misinterpreted as 5
//     O is misinterpreted as 0
//     I is misinterpreted as 1

// The test cases contain numbers only by mistake.

/* 

PARAMETERS:
given a string

RESULTS:
replace the numbers with their letter equivalent

EXAMPLES:
    assert.strictEqual(correct("L0ND0N"),"LONDON");
    assert.strictEqual(correct("DUBL1N"),"DUBLIN");
    assert.strictEqual(correct("51NGAP0RE"),"SINGAPORE");
    assert.strictEqual(correct("BUDAPE5T"),"BUDAPEST");
    assert.strictEqual(correct("PAR15"),"PARIS");

PSEUDOCODE:

*/

const correct = string => {
    let arr = string.split('')

    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === '5') arr[i] = 'S';
        if (arr[i] === '0') arr[i] = 'O';
        if (arr[i] === '1') arr[i] = 'I';
    }

    return arr.join('');
}

console.log(correct('51NGAP0RE'));

//elegant solution

const correctAlt = s => s.replace(/0/g, 'O')
                         .replace(/1/g, 'I')
                         .replace(/5/g, 'S');

console.log(correctAlt('51NGAP0RE'));