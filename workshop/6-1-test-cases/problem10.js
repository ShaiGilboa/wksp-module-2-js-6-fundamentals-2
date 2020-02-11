let verifyEquals = require('../../assets/verify-equals');

// Problem 10
// ----------
// Make this function return the input string, capitalized. You must use a for loop. For example:
// f("hello world"); // Hello World
// f("ALL YOUR BASE ARE BELONG"); // All Your Base Are Belong

// HINT:
//    - Use a for loop to capitalize the words one by one
//    - Use the toUpperCase string method

function f(str) {
  if (typeof(str) !== 'string') return undefined;
  if (str === '') return '';
  let allLower = str.toLowerCase();
  let arr = allLower.split(' ');
  let cap = '';
  for (i = 0; i < arr.length; i++){
    let word = arr[i].split('');
    cap = word[0].toUpperCase();
    word[0] = cap;
    word = word.join('');
    arr[i] = word;
  }
  return arr.join(' ');
}

// Test cases
let inputs = ['Hi My Name Id Shai', 'Hi mY nAME iS sHAI', '', 235, ['dgdg'], [46], 'wHaT iS gOiNg On? ???'];
let outputs = ['Hi My Name Id Shai', 'Hi My Name Is Shai', '', undefined, undefined, undefined, 'What Is Going On? ???'];

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
