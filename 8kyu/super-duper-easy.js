// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

/* 

PARAMETERS:
given the argument,

RESULTS: 
determine whether it is a string or not. if it is, then return "Error" otherwise return the value multiplied by 50 and increased by 6

EXAMPLES:
    assert.strictEqual(problem("hello"), "Error");
    assert.strictEqual(problem(1), 56);
    assert.strictEqual(problem(5), 256);
    assert.strictEqual(problem(0), 6);
    assert.strictEqual(problem(1.2), 66);
    assert.strictEqual(problem(3), 156);
    assert.strictEqual(problem("RyanIsCool"), "Error");
    assert.strictEqual(problem(-3), -144);
    assert.strictEqual(problem(""), "Error");
    assert.strictEqual(problem(0.03), 7.5);

PSEUDOCODE:
conditional

*/

const problem = x => typeof x === 'number' ? x * 50 + 6 : "Error";