---
templateKey: blog-post
title: JavaScript and Scope VIII - Improved Closures
date: 2019-06-13T16:28:15.276Z
description: Scope in Javascript, part 8, improved closures
featuredpost: false
featuredimage: /img/javascript-scope-closures-og-image.png
tags:
  - javascript-scope-series
  - javascript
  - javascript-basics
  - programming
  - scope
  - closures
---

In the previous article on [JavaScript and Scope VII - More Closures](/blog/2019-06-10-javascript-and-scope-vii/) you saw how we can use closures to help us avoid problems with blocks not having scope, especially in loops.

```js{5,8}
var funcs = [];

// Outer function creates new scope.
function makeLog (i) {
  var j = i;
  // Declare inner function using new scope.
  return function () {
    console.log('My value: ', j);
  }
}

for (var i = 0; i < 4; i++) {
  // Run makeLog, but the inner function doesn't run yet.
  funcs[i] = makeLog(i);
}

// Run each inner function.
funcs[1](); // logs 1
funcs[2](); // logs 2
funcs[3](); // logs 3
```

<div class="jsfiddle-link">
  <a href="https://jsfiddle.net/tchaffee/mhaj0Lbw/" target="_blank">Edit in JSFiddle</a>
</div>

We can improve the code above because as you saw in [JavaScript and Scope I - Intro](/blog/2019-06-01-javascript-and-scope/), parameter names also use *function scope*. An inner function using an outer *function scope* is what closures depend on.

```js{4,7}
var funcs = [];

// Outer function creates new scope.
function makeLog (j) {
  // Declare inner function using new scope.
  return function () {
    console.log('My value: ', j);
  }
}

for (var i = 0; i < 4; i++) {
  // Run makeLog, but the inner function doesn't run yet.
  funcs[i] = makeLog(i);
}

// Run each inner function.
funcs[1](); // logs 1
funcs[2](); // logs 2
funcs[3](); // logs 3
```
<div class="jsfiddle-link">
  <a href="https://jsfiddle.net/tchaffee/t1Lg7acn/" target="_blank">Edit in JSFiddle</a>
</div>

All we did is remove the use of the intermediate variable `j`, and use the parameter to create the function scope we need for a closure.

We can "simplify" even further by using an Immediately Invoked Function Expression (IIFE). 

```js{5}
var funcs = [];

for (var i = 0; i < 4; i++) {
  // The inner function doesn't run yet.
  funcs[i] = ((j) => () => console.log('My value: ', j))(i);
}

// Run each inner function.
funcs[1](); // logs 1
funcs[2](); // logs 2
funcs[3](); // logs 3
```
<div class="jsfiddle-link">
  <a href="https://jsfiddle.net/tchaffee/27sjv9qz/" target="_blank">Edit in JSFiddle</a>
</div>

Much shorter, but perhaps *not* as simple to understand. We use an outer arrow function that returns an inner arrow function. And we immediately run that outer arrow function with the value of `i`. In terms of how it works, it is exactly the same as the previous example using the `makeLog` function. Compare the two until you understand why.

A truly easy to understand way of avoiding the block scope problem with loops is using the `let` keyword to declare `i` in the `for` loop. Remember the `let` keyword *will* create a new scope for blocks, as you saw in [JavaScript and Scope V - let and const](/blog/2019-06-10-javascript-and-scope-v/).

```js
var funcs = [];

for (let i = 0; i < 4; i++) {
  funcs[i] = function () { 
    console.log('My value: ', i);
  };
}

funcs[1](); // logs 1
funcs[2](); // logs 2
funcs[3](); // logs 3
```
<div class="jsfiddle-link">
  <a href="https://jsfiddle.net/tchaffee/r48pegko/" target="_blank">Edit in JSFiddle</a>
</div>

No need to use a closure when we have block level scope.

Keep in mind you will still see variations on the solutions above that use closure, especially in pre-ES6 code. And don't dismiss closures just because we can create block scope. Closures are still common in JavaScript because they have many uses. It's an essential and powerful language feature.