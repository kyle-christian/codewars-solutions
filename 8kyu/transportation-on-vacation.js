// every day used car costs $40

//7 or more days, $50 off the total

//3 or more, $20 off the total

//my solution

const rentalCarCost = d => {
    if (d >= 7) {
        return (d * 40) - 50;
    } else if (d >= 3) {
        return (d * 40) - 20;
    } else {
        return d * 40
    }
};

rentalCarCost(7);

//elegant solution

function rentalCarCostAlt(d) {
    let total = d * 40;
    if (d >= 7) return total - 50
    if (d >= 3) return total - 20
    return total
};