---
templateKey: blog-post
title: JavaScript and Scope II - Functions
date: 2019-06-03T12:35:15.276Z
description: Scope in Javascript, part 2
featuredpost: false
featuredimage: /img/scope.jpg
tags:
  - javascript-scope-series
  - javascript
  - javascript-basics
  - programming
  - scope
---
As you saw in the [intro article about JavaScript scope](/blog/2019-06-01-javascript-and-scope/), a function creates a new scope. Scope determines which value to use when we have two different variables with the same name.

But is scope determined by where a function is declared, or where the function is run?

```js{1,8,15}
var i = 10;

function foo() {
  var i = 2;
}

function bar() {
  i = i + 1;
  console.log ('value of i when bar is declared outside foo: ', i);
}

foo();

bar();
```
<div class="jsfiddle-link">
  <a href="https://jsfiddle.net/tchaffee/0jwyg6za/" target="_blank">Edit in JSFiddle</a>
</div>

In the example above it should be obvious that `i` will have a value of `11` when `console.log` runs. But what happens if we run `bar` inside of `foo`? The answer might surprise you if you are new to JavaScript.

```js{5}
var i = 10;

function foo() {
  var i = 2;    
  bar();
}

function bar() {
  i = i + 1;
  console.log ('value of i when bar is run inside foo: ', i);
}

foo();
```
<div class="jsfiddle-link">
  <a href="https://jsfiddle.net/tchaffee/bue5zf9w/" target="_blank">Edit in JSFiddle</a>
</div>

The `i` variable again will have a value of `11` when `console.log` runs.

Because `bar` is *declared* or defined in the global scope, it changes the value of the `i` variable that exists in the same global scope. Even when it runs inside of `foo`, it does not reference the `i` variable declared inside of the `foo` scope.

So what happens if we declare the bar function inside of the `foo` function?

```js{6}
var i = 10;

function foo() {
  var i = 2;
  
  function bar() {
    i = i + 1;
    console.log ('value of i when bar is declared inside foo: ', i);
  }
  
  bar();

}

foo();
```
<div class="jsfiddle-link">
  <a href="https://jsfiddle.net/tchaffee/x3f1Ln8e/" target="_blank">Edit in JSFiddle</a>
</div>

Hopefully you guessed that `console.log` will now show `i` having a value of `3`. The `bar` function is declared inside the scope of the `foo` function, so it will change and output the value of the `i` variable declared in the `foo` scope.

Many programming languages work like this, but not all of them so it's good to know the vocabulary for this. When scope is determined by where a function is declared (where it is written in the source code), we call it lexical scope. JavaScript uses lexical scope.
