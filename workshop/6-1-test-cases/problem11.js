let verifyEquals = require('../../assets/verify-equals');

// Problem 11
// ----------
// Make this function return the sum of all the numbers in the input array.
// If any element in the array is not a number, skip it. If the array is empty, return zero.

function f(arr) {
    if (typeof(arr) !== 'object') return undefined;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof(arr[i]) === 'number') sum = sum +arr[i];
    }
    return sum;
}

// Test cases
let inputs = [[1,1], [6,6,8], ['', 7, '', 3], ['wer', 'wer ', 'wers'], [-3, 3], [], 234, 'sdf', [7]];
let outputs = [2, 20, 10, 0, 0, 0, undefined, undefined, 7];

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
