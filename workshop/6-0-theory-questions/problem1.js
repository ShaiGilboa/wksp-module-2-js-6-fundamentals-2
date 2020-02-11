// Given the following functions, answer the questions below.

function square(x) {
    return x * x;
}

function decrement(x) {
    return x - 1;
}

function duplicateString(x) {
    return x.concat(x);
}

function reverseString(str) {
    const splitString = str.split(""); // var splitString = "hello".split("");
    const reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    return reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join(""); 
}

// Expand each of the following and get the result of the expression
// Q1
square(decrement(square(decrement(3))));
// 3-1=2
// 2*2 = 4
// 4-1=3
//3*3=9
console.log(square(decrement(square(decrement(3)))))

// Q2
decrement(decrement(square(square(3))));
//3*3=9
//9*9=81
//81-1=80
//80-1=79
console.log(decrement(decrement(square(square(3)))))

// Q3
duplicateString(reverseString("hello"));
// 'hello' -> 'olleh'
// 'olleh' -> 'olleholleh'
console.log(duplicateString(reverseString("hello")))


// Q4
reverseString(duplicateString(duplicateString("foo")));
// 'foo' -> 'foofoo'
// 'foofoo' -> 'foofoofoofoo'
// 'foofoofoofoo' -> 'oofoofoofoof'

console.log(reverseString(duplicateString(duplicateString("foo"))))
