---
templateKey: blog-post
title: JavaScript and Scope IV - Blocks
date: 2019-06-07T14:15:15.276Z
description: Scope in Javascript, part 4
featuredpost: false
featuredimage: /img/javascript-scope-iv-blocks-og-image.png
tags:
  - javascript-scope-series
  - javascript
  - javascript-basics
  - programming
  - scope
---
In [JavaScript and Scope I, II, and III](/tags/javascript-scope-series/) we looked at scope and *functions*. What about other statements that use blocks? Blocks being sections of code enclosed by curly brackets `{}`.

For example, we often declare variables in a `for` loop with a block.

```js{1,3}
var buzz = 3;

for (var buzz = 1; buzz < 10; buzz++) {
  if (buzz === 9) { 
    console.log('for loop buzz:', buzz); // logs 9
  }
}

console.log('global scope buzz:', buzz); // logs 10
```
<div class="jsfiddle-link">
  <a href="https://jsfiddle.net/tchaffee/5m4wk8hu/" target="_blank">Edit in JSFiddle</a>
</div>

When you run the code above, you'll see there is only one `buzz` variable. The one declared in the global scope. The `for` loop changes the global variable. The `buzz` variable will have a value of `10` when the last `console.log` runs.

What about `if` statements?

```js{1,4}
var cute = 'not';

if (true) {
  var cute = 'cat';
}

console.log(cute); // logs 'cat'
```
<div class="jsfiddle-link">
  <a href="https://jsfiddle.net/tchaffee/Lutdkqsx/" target="_blank">Edit in JSFiddle</a>
</div>

Again, there is only one `cute` variable and the final value of the variable in the global scope will be `'cat'`. The re-declaration of the variable inside the block does not create a new scope and variable.

Both of the examples above are the *opposite* of what we saw for functions. Functions create a new scope for variables. Blocks do *not* create a new scope for variables declared with `var`.

Did you know you can declare blocks all on their own without using an `if` or `for` statement or anything else? I will leave you with this one final very simple example to help you memorize the rule: *blocks do not create a new scope for variables declared with `var`*.

```js
var toto = 'wants';

{
  var toto = 'a puppy';
}

console.log(toto); // logs 'a puppy'
```
<div class="jsfiddle-link">
  <a href="https://jsfiddle.net/tchaffee/17st5cmk/" target="_blank">Edit in JSFiddle</a>
</div>