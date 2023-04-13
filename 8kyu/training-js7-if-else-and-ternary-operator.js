// Task:

// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer will buy, different numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.
// number of hotdogs 	price per unit (cents)
// n < 5 	100
// n >= 5 and n < 10 	95
// n >= 10 	90

// You can use if..else or ternary operator to complete it.

/* 

PARAMETERS:
given a number n,

RESULTS:
return the corresponding price

EXAMPLES:
    assert.strictEqual(saleHotdogs(  1),  100);
    assert.strictEqual(saleHotdogs(  4),  400);
    assert.strictEqual(saleHotdogs(  5),  475);
    assert.strictEqual(saleHotdogs(  9),  855);
    assert.strictEqual(saleHotdogs( 10),  900);
    assert.strictEqual(saleHotdogs(100), 9000);

PSEUDOCODE:
use a ternary operator

*/

const saleHotdogs = n => n < 5 ? 100 * n : n >= 5 && n < 10 ? 95 * n : 90 * n;

// FIRST TRY LETS GOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO

// okay I just had to be shown up by a more clever solution. I like the idea of multiplying n by whatever answer we get from the ternary instead of doing n individually. Furthermore, if we were to change n, we can do it less times than with my own solutions. It's the little things y'know?

const saleHotDogsAlt = n => n * (n < 5 ? 100 : n < 10 ? 95 : 90)