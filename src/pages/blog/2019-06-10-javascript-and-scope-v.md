---
templateKey: blog-post
title: JavaScript and Scope V - let and const
date: 2019-06-10T11:15:15.276Z
description: Scope in Javascript, part 5 - Let
featuredpost: false
featuredimage: /img/javascript-scope-v-og-image.png
tags:
  - javascript-scope-series
  - javascript
  - javascript-basics
  - programming
  - scope
---
In [JavaScript and Scope IV - Blocks](/blog/2019-06-07-javascript-and-scope-iv/) we showed that blocks on their own do not create a new scope when using the `var` keyword. Wouldn't it be nice if there were a way to create the `toto` variable inside a block so that it would have its own scope, unlike below?

```js
var toto = 'wants';

{
  var toto = 'a puppy';
}

console.log(toto); // logs 'a puppy'
```

ES6 allows block level scope with the `let` keyword when declaring variables.

```js{1,4}
var toto = 'wants';

{
  let toto = 'a puppy';
}

console.log(toto); // logs 'wants'
```
<div class="jsfiddle-link">
  <a href="https://jsfiddle.net/tchaffee/db423zut/" target="_blank">Edit in JSFiddle</a>
</div>

In the code above, the `toto` variable inside the block no longer pollutes the value of the global variable because they are now two different variables even if they have the same name.

We can also fix the `for` loop example from the previous article.

```js{1,3}
var buzz = 3;

for (let buzz = 1; buzz < 10; buzz++) {
  if (buzz === 9) { 
    console.log('for loop buzz:', buzz); // logs 9
  }
}

console.log('global scope buzz:', buzz); // now logs 3
```
<div class="jsfiddle-link">
  <a href="https://jsfiddle.net/tchaffee/qr7x2fuk/" target="_blank">Edit in JSFiddle</a>
</div>

And we can also fix the `if` statement code. This time we use the `const` key word so the value cannot be changed.

```js{1,4}
var cute = 'not';

if (true) {
  const cute = 'cat';
}

console.log(cute); // logs 'not'
```
<div class="jsfiddle-link">
  <a href="https://jsfiddle.net/tchaffee/yjwt75v4/" target="_blank">Edit in JSFiddle</a>
</div>

As you can see from the examples above, both `let` and `const` will give you block level scope when you need it. In fact, it's one of the reasons to prefer using `let` and `const` instead of `var`. Variables should have as limited scope as possible to avoid the types of unexpected side effects we saw in the previous article.