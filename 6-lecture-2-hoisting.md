# 2.6.2 - Hoisting

---

### Variables

Basically, when Javascript compiles all of your code, all variable declarations using `var` are hoisted/lifted to the top of their functional/local scope regardless of where the actual declaration has been made.

--- 

## Functions

Functions declarations are also hoisted, but these go to the very top, so will sit above all of the variable declarations.

---

### Example

```js
// what will output to the console?
console.log(greeting);
var greeting = 'Hello';

// a. 'Hello'
// b. undefined
// c. Uncaught ReferenceError: greeting is not defined
```
hoisting brings up the declaration but not the value;

---

It is only the variable declarations that get moved to the top, not the actual value given to the variable.

---

```js
// what will output to the console?
console.log(anotherGreeting);
const anotherGreeting = 'Good evening';

// a. 'Good evening'
// b. undefined
// c. ReferenceError: can't access lexical declaration `anotherGreeting' before initialization
```
const not hoisted
---

```js
// what will output to the console?
console.log(yetAnotherGreeting);
let yetAnotherGreeting = 'Goodnight';

// a. 'Good evening'
// b. undefined
// c. ReferenceError: can't access lexical declaration `anotherGreeting' before initialization
```
let is not hoisted
---

Yet another reason to take `var` and bury it somewhere... ⚰️

---

Function _declarations_ are hoisted to the very top of their scope as well.

```js
function greetMe() {
    console.log(`Hi ${yourName}!`);
}
greetMe();
var yourName = 'Fred';
```

---

Of note, it is not the declarations themselves that are moved to the top, just the JS compiler that reading them first and alloting them memory space.

---