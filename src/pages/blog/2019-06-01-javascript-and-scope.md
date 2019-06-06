---
templateKey: blog-post
title: JavaScript and Scope I
date: 2019-06-01T22:18:12.276Z
description: Scope in Javascript, part 1
featuredpost: false
featuredimage: /img/scope.jpg
tags:
  - javascript
  - javascript-basics
  - programming
  - scope
---
Scope determines where a variable exists and does not exist in a program.

```js
function bar () {
  var foo = 2;
  console.log(foo); // 2
}

bar();

console.log(foo); // ReferenceError: foo is not defined;
```
<div class="jsfiddle-link">
  <a href="https://jsfiddle.net/tchaffee/L4h60y79/6/" target="_blank">Edit in JSFiddle</a>
</div>


Scope also determines which value to use when we have two *different* variables with the same name.

```js
var foo = 1;

function bar () {
  var foo = 2;
  console.log('foo inside bar: ', foo); // 2
}

bar();

console.log('foo outside bar: ', foo) // 1;
```
<div class="jsfiddle-link">
<a href="https://jsfiddle.net/tchaffee/0oy9jc1n/2/" target="_blank">Edit in JSFiddle</a>
</div>

If you run the example above, you will first see '2' logged to the console, and then you will see '1'. The `foo` created inside the `bar` function is a different variable from the `foo` created at the top of the program.

The `foo` variable declared at the top of the program is in the global scope. The `foo` variable declared inside the function is in that function's scope only.


