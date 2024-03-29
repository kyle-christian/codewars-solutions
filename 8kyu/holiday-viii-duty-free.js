// The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.

// You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.

// For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.

// All inputs will be integers. Please return an integer. Round down.

/* 

PARAMETERS:
given the normal price of a bottle, the discount percentage of the normal price, and the cost of a holiday

RESULTS:
return how much you would have to save to cover the cost of your holiday

EXAMPLES:
    assert.strictEqual(dutyFree(12, 50, 1000), 166);
    assert.strictEqual(dutyFree(17, 10, 500), 294);
    assert.strictEqual(dutyFree(24, 35, 3000), 357);   

PSEUDOCODE:
multiply the norm price with the discount percentage, then use that number to divide into the holiday cost, rounding down

*/

function dutyFree(normPrice, discount, hol) {
    let discountMath = normPrice * (discount * 0.01);

    return (Math.floor(hol / discountMath));
}

dutyFree(24, 35, 3000);

// simpler solution

const dutyFree = (normPrice, discount, hol) => (Math.floor(hol / normPrice / discount * 100));