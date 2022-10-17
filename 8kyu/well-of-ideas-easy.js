// Description:

// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

/* 

PARAMETERS:
given an array of ideas

RESULTS:
if there are one or two good ideas, return publish
if more than 2, return, i smell a series!
if no good ideas, return fail

EXAMPLES:
    assert.strictEqual(well(['bad', 'bad', 'bad']), 'Fail!');
    assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
    assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!');

PSEUDOCODE:

*/

function well(x) {
  if (x.includes("good")) {
    let count = 0;

    for (let i = 0; i < x.length; i++) {
      if (x[i] == "good") {
        count++;
      } else {
        continue;
      }
    }

    if (count > 2) {
      return "I smell a series!";
    } else {
      return "Publish!";
    }
  } else {
    return "Fail!";
  }
}

console.log(
  well(["good", "bad", "bad", "bad", "bad", "good", "bad", "bad", "good"])
);

// best practice

const well = (x) => {
  const good_count = x.filter((x) => x == "good").length;
  return good_count < 1
    ? "Fail!"
    : good_count < 3
    ? "Publish!"
    : "I smell a series!";
};
