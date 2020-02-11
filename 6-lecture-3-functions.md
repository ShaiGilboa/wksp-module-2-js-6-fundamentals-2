# 2.6.3 - JS More Fundamentals - Functions

---

Functions are a Fundamental building block of JavaScript.

Functions _encapsulate_ a particular task.

---

## Function Parameters and Arguments

---

### A parameter

is a variable in function, or method, definition.

```js
// Example
function greeting(paramert1, parameter2....) {
    return `${paramert1}! want some bacon?`;
}

greeting('Shai');
```
```js
function greeting(names){
    names.forEach(function(name) {
        console.log `${name}! want some bacon?`;
    });
}
greeting(['daniel', 'bob', 'clara'])

function greeting2(names){
    // const x = names.map(function(name) {
    //     return `${name}! want some bacon?`;
    // });
    // return x;

    return = names.map(function(name) {
        return `${name}! want some bacon?`;
    });
}
console.log (greeting2(['daniel', 'bob', 'clara']))
---

### An argument

is the value given to the parameter when a function, or method is called.

```js
// Example

```

---

What is the output of this function?

```js
function f() {
    console.log("hello");
}

f("bye"); // 'hello'
```

---

--> Extra arguments are ignored.

---

### Extra arguments vs missing arguments

- Calling a function with extra arguments
    - Never useful
    - Usually an indication of a bug
- Calling a function with fewer arguments
    - Sometimes useful
    - But could also be a mistake

---

### _Defining_ a function

This is how we have been _defining_ (and declaring) functions up-to-now

```js
function someFunc() {
    // do something...
}
```

--- 

There are 2 other ways to _define_ a function

```js
const someFunc = function() {
    // do something...
}
```

This will _define_ a function expression.

⚠️ **Function expressions are NOT hoisted.**

---

The third way is an arrow function

```js
someFunc = (parameters) => {
    // do something...
}
```

This is equivalent to the previous way of _defining_ a function. 

⚠️ **It is NOT hoisted either.**

---

As of now, you are free to use the syntax you wish.

I will let you know when to _not_ use a particular syntax.

---

## What a function `returns`

```js
// Example
someFunc = () => {
    return 'bacon';
}

console.log(someFunc());
```

`return` is the end of the line...

---

Functions are a Fundamental building block of JavaScript.

Functions _encapsulate_ a particular task.

---