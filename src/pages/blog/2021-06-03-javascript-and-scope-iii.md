---
templateKey: blog-post
title: JavaScript and Scope III
date: 2019-06-07T12:35:15.276Z
description: Scope in Javascript, part 3
featuredpost: false
featuredimage: /img/scope.jpg
tags:
  - javascript-scope-series
  - javascript
  - javascript-basics
  - programming
  - scope
---
As you saw in the [JavaScript and Scope I](/blog/2019-06-01-javascript-and-scope/) and [JavaScript and Scope II](/blog/2020-06-03-javascript-and-scope-ii/), functions create a new scope which will hide the value of variables in a higher scope, such as global scope.

What about arrow functions? Let's go back to our first ever code example and change it to an arrow function.

```js
var bar = () => {
  var foo = 2;
  console.log(foo); // 2
}

bar();

console.log(foo);
```
<div class="jsfiddle-link">
  <a href="https://jsfiddle.net/tchaffee/xqtwu138/" target="_blank">Edit in JSFiddle</a>
</div>

If you run the code above, you'll see that scope behaves the same as a regular function declaration: The `foo` variable only exists inside the function scope, and does not exist in the global scope.

The same is true of all the other examples given so far. If you have a few minutes, go ahead and edit every code example from the previous two articles and change them to use only arrow functions so you can see for yourself. Use the first example above as a guide for how to change a regular function declaration to an arrow function.

<div class="jsfiddle-link">
  <a href="https://jsfiddle.net/tchaffee/0oy9jc1n/2/" target="_blank">Example 2, Edit in JSFiddle</a>
</div>

<div class="jsfiddle-link">
  <a href="https://jsfiddle.net/tchaffee/0jwyg6za/" target="_blank">Example 3, Edit in JSFiddle</a>
</div>

<div class="jsfiddle-link">
  <a href="https://jsfiddle.net/tchaffee/bue5zf9w/" target="_blank">Example 4, Edit in JSFiddle</a>
</div>

<div class="jsfiddle-link">
  <a href="https://jsfiddle.net/tchaffee/x3f1Ln8e/" target="_blank">Example 5, Edit in JSFiddle</a>
</div>

There are a couple of exceptions to how scope works in arrow functions. Arrow function scope does not include its own `this` or its own `argument` object, which will be covered in another post. For now we are focusing on the scope of declared variables.

In summary you can count on arrow functions to have their own scope for declared variables, just like regular function declarations.