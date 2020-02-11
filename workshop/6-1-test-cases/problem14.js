let verifyEquals = require('../../assets/verify-equals');

// Problem 14
// ----------
// Make this function return the input string wrapped to 40 characters per line. 
// This means you'll have to insert a newline \n character after every 40 characters in the input string. 
// If the next character after a cut is a space, then do not display it. 

// For example:
// with this input:
//      "Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam"

// the output would be:
//      Lorem ipsumos dolor sit amet consectetur
//      adipisicing elit. Magni quisquam"

// instead of:
//      Lorem ipsumos dolor sit amet consectetur
//       adipisicing elit. Magni quisquam

// even though there is a space before the a in adipisicing

function f(str) {
  if (typeof(str) !== 'string') return undefined;
  let strArr = str.split('');
  for (let i = 39; i < strArr.length; i = i + 40) {
    console.log("start" + strArr.length); 

    console.log(strArr[i])
    if (strArr[i+1] === " "){
      console.log(strArr[i+1])

      strArr.splice(i+1, 1, '\n');
      i++;
    } else {
      console.log(strArr[i+1])

      strArr.splice(i+1, 0,'\n');
      console.log(strArr[i+1] + strArr[i+2])
      i++;
    }
  }
  console.log("end" + strArr.length); 
  return strArr.join('');
}

// Test cases
let inputs = ["Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam", '000000000011111111112222222222333333333344444444445555555555666666666677777777778888888888', '0000000000111111111122222222223333333333 44444444445555555555666666666677777777778888888888'];
let outputs = ["Lorem ipsumos dolor sit amet consectetur\nadipisicing elit. Magni quisquam", '0000000000111111111122222222223333333333\n4444444444555555555566666666667777777777\n8888888888', '0000000000111111111122222222223333333333\n4444444444555555555566666666667777777777\n8888888888'];

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
