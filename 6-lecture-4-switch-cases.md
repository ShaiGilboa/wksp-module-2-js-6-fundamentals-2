# 2.6.4 - JS More Fundamentals - Switch Cases

---

## The [Switch statement](https://love2dev.com/blog/javascript-switch-statement/)

is used as an alternate to multiple if / else statements.

---

Switch statements are a more efficient way to code when testing _multiple_ conditions.

---

### Characteristics

- The switch expression is evaluated once.
- The value of the expression is compared with the value of each case in order.
- If there is a match, the associated block of code is executed.
- A default case can be defined when the expression does not match a case.

---

### Example

```js
switch (time) {
    case 6:
        console.log('Wake up!');
        alarm();
        break; // stick with break, unless we need to return something - then we use return.
    case 22:
        console.log('off to bed');
        turnOffComputer();
        break;
    default:
        console.log('Keep doing what you\'re doing');
        noChange();
        break;
}
```

---

### `break` vs `return`

- `break` will _break_ out of the switch case.
- Without a `break`, the following cases will also be evaluated.
- `return` will stop the rest of the function from being evaluated. _wil take you out not just from the switch, but also from the function that the switch is in_   

---

see example (sample-switch.js)