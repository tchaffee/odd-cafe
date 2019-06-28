---
templateKey: blog-post
title: JavaScript and Scope VII - More Closures
date: 2019-06-10T16:28:15.276Z
description: Scope in Javascript, part 7, more closures
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
In the previous article on [JavaScript and Scope VI - Closures](/blog/2019-06-10-javascript-and-scope-vi/) you saw your first example of how lexical scope can result in closures. A closure meaning that inner functions have access to the variables of outer functions. Even when the outer function finishes running.

Another great way of seeing this is with a callback function, since callbacks are still fairly common, especially in older JavaScript.


```js{2,3,18,21}
function runsAnyCallback(callback) {
  var i = 10;
  callback();
}

function foo() {
  var i = 2;
  
  function bar() {
    i = i + 1;
    console.log ('value of i when bar is declared inside foo: ', i);
  }

  return bar;
}

// Get the bar function.
var barFunc  = foo();

// foo has already completed running.
runsAnyCallback(barFunc); // logs 3!
```
<div class="jsfiddle-link">
  <a href="https://jsfiddle.net/tchaffee/bjm12g3d/" target="_blank">Edit in JSFiddle</a>
</div>

Think of closures as just another tool to get the results you want. One of the [most popular JavaScript questions about scope on StackOverflow](https://stackoverflow.com/questions/750486/javascript-closure-inside-loops-simple-practical-example) is about unexpected values in a `for` loop.

```js{3,5}
var funcs = [];

for (var i = 0; i < 4; i++) {
  // Declare and save a function.
  funcs[i] = function() {
    console.log('My value: ', i);
  };
}

// Global variable `i` is already 3.

// Run each function.
funcs[1](); // logs 3
funcs[2](); // logs 3
funcs[3](); // logs 3
```

The above code should make sense to you already because you know from [JavaScript and Scope IV - Blocks](/blog/2019-06-07-javascript-and-scope-iv/) that blocks do not create new scope when using `var`. So the `i` variable exists at the *global* scope. The final value of the `i` variable will be `3`, *before* any of the functions run. Each of the functions will just log the current value of the global `i` variable when they run.

One way to fix this is using a closure.

```js{5,7}
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

In the code above, we take advantage of the fact that functions create a new scope. Every time the outer `makeLog` function runs, it creates a new and separate `j` variable in its scope. It then declares and returns an inner function that logs that local `j` variable. Even when the `makeLog` function finishes running, that returned function will still reference the unique `j` variable created each time `makeLog` runs. Because `makeLog` ran three times, there are 3 separate `j` variables.

Note that for learning purposes the above code is intentionally more verbose than needed, and will be improved upon in [JavaScript and Scope VIII - Improved Closures](/blog/2019-06-13-javascript-and-scope-viii/).