// Description:

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string


// my solution

function fakeBin(x){
    let arr = x.split('').map(Number);
  
    arr.forEach((element, index, array) => {
      if (element < 5) {
        array[index] = 0;
      } else {
        array[index] = 1;
      }
    });
    
    return arr.join('').toString();
  
};

//a more elegant solution

function fakeBinAlt(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
};