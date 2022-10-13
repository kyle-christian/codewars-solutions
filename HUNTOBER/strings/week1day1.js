// '0' <-> 'O'      '5' <-> 'S'
// '1' <-> 'I'      '6' <-> 'G'
// '2' <-> 'Z'      '7' <-> 'L'
// '3' <-> 'E'      '8' <-> 'B'
// '4' <-> 'h'      '9' <-> 'q'


/* 

PARAMETERS:
given a string

RESULTS:
decode it with the given values

EXAMPLES:
"PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770." 
// implement fix function -> 
"PRO-TIP #498: IT'S NICE TO SAY HELLO."

PSEUDOCODE:
could make an output of an empty string and concatenate based off of the input

*/

const translation = {
    0: 'O',
    1: 'I',
    2: 'Z',
    3: 'E',
    4: 'h',
    5: 'S',
    6: 'G',
    7: 'L',
    8: 'B',
    9: 'q',
}

const decoder = string => {
    let output = ''

    for (let i = 0; i < string.length; i++) {
        let currentChar = string.charAt(i)
        let decodedChar = translation[currentChar]

        output += decodedChar == undefined ? currentChar : decodedChar
    }

    return output
}

console.log(decoder("hqB"))

// const decoder = string => {
//     let output = ""
    
//     for (let i = 0; i < string.length; i++) {

//         switch(string[i]) {
//             case '0':
//                 output += 'O'
//                 break;
//             case '1':
//                 output += 'I'
//                 break;
//             case '2':
//                 output += 'Z'
//                 break;
//             case '3':
//                 output += 'E'
//                 break;
//             case '4':
//                 output += 'h'
//                 break;
//             case '5':
//                 output += 'S'
//                 break;
//             case '6':
//                 output += 'G'
//                 break;
//             case '7':
//                 output += 'L'
//                 break;
//             case '8':
//                 output += 'B'
//                 break;
//             case '9':
//                 output += 'q'
//                 break;
//             default:
//                 output += string[i]
//                 break;
//         }
//     }

//     return output
    
// }
