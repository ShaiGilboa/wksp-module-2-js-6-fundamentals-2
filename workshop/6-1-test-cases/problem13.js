let verifyEquals = require('../../assets/verify-equals');

// Problem 13
// ----------
// Make this function return true if the input string is a palindrome,
// and false otherwise.
// A palindrome is a string that is the same if you reverse it.
// RADAR -> Yes
// JAVASCRIPT -> No

function f(str) {
    if (typeof(str) !== 'string') return undefined;
    let first = 0;
        for (let i = str.length - 1; i >= first; i--){
            if (str.charAt(i) !== str.charAt(first)) return false;
            first ++;
        }
    return true;
}

// Test cases
let inputs = ['radar radar', 'Jad  aJ', 'abcba', 'trt', 'trrtr', '', 232];
let outputs = [true, false, true, true, false, undefined];

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
