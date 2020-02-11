let verifyEquals = require('../../assets/verify-equals');

// Problem 12
// ----------
// Make this function return the elements that are unique to array1 and array2.
// An element is unique if it only appears once.
// If there are no unique elements return an empty array.
// If the inputs are anything other than arrays, return undefined.

// For example:
// uniqueElements([[0,1,2,3], [1,3,4,5]]); // [0,2,4,5]
// uniqueElements([[1,2,3], [3,2,1]]); // []
// uniqueElements(2); // undefined, not an array

// HINTS: 
//     - Use a for loop inside another for loop
//     - You will need to run your logic 2 times
//     - Once to get the unique elements in the first array
//     - A second time to get the unique elements in the second array

function f(input) {
    console.log(typeof(input) + typeof(input[0]) + typeof(input[1]));
    // if ((typeof(input) !== 'object') || (typeof(input[0]) !== 'object') || (typeof(input[1] !== 'object'))) return undefined;
    console.log('hi')
    let answer = [];
    for (let i = 0; i < input[0].length ; i ++) {
        console.log(i)
        let j = 0;
        for (; j < input[1].length; j++) {
            console.log('j' + j)
            if (input[0][i] === input[1][j]) j = input[1].length+3;
        }
        console.log('jj' + j)
        if (j !== input[1].length + 3) answer.push(i);
        console.log('answer ' + answer)
    }

    for (i = 0; i < answer.length; i++){
        for (let j = i + 1; j < answer.length; j ++){
            if (answer[i] === answer[j]) answer.splice(i,1);
        }
    }
    return answer;
}

// Test cases
let inputs = [
    [[0, 1, 2, 3], [1, 3, 4, 5]],
    [[1, 2, 3], [1, 2, 3]],
    [2, 3]
];
let outputs = [
    [0, 2, 4, 5],
    [],
    undefined
];

// STOP -----------------------------------------------------------------
// No code changes below. This is the actual test that will run your test cases and validate your function.
function runTest(i) {
    if (i >= inputs.length) throw new Error('You do not have enough test cases');
    let expected = outputs[i];
    let actual = f(inputs[i]);
    verifyEquals(expected, actual);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);

console.log('All tests passed for ' + __filename);
