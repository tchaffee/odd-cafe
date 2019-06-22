---
templateKey: blog-post
title: JavaScript and Scope VI - Closures
date: 2019-06-10T14:33:15.276Z
description: Scope in Javascript, part 6
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

In [JavaScript and Scope II](/blog/2019-06-03-javascript-and-scope-ii/) we saw that function scope is not determined by where a function is run. Instead, it is determined by where a function is declared. 

```js{4,6,11}
var i = 10;

function foo() {
  var i = 2;
  
  function bar() {
    i = i + 1;
    console.log ('value of i when bar is declared inside foo: ', i);
  }
  
  bar();

}

foo(); // logs 3
```
<div class="jsfiddle-link">
  <a href="https://jsfiddle.net/tchaffee/x3f1Ln8e/" target="_blank">Edit in JSFiddle</a>
</div>

But the example above doesn't fully illustrate lexical scope because the `bar` function is also *run* inside the `foo` function. Let's run the `bar` function outside of the `foo` function.

```js{11,16}
var i = 10;

function foo() {
  var i = 2;
  
  function bar() {
    i = i + 1;
    console.log ('value of i when bar is declared inside foo: ', i);
  }
  
  return bar;
}

var barFunc  = foo();

barFunc(); // Runs in global scope but logs 3
```
<div class="jsfiddle-link">
  <a href="https://jsfiddle.net/tchaffee/so324k6x/" target="_blank">Edit in JSFiddle</a>
</div>

In the code above, we no longer run `bar` inside of `foo`. Instead we return the inner function without running it. Then we run the function on the last line of code: it runs in the global scope. Most importantly it runs *after* `foo` is done running. But it does not use the global `i` variable. Instead it uses the `i` variable from the function that has already finished running!

The official name for what you just saw is closure. That's how simple closure is. All closure means is that even when a function is run outside of the scope it was declared in, it still uses the scope from where it was declared. In this case, inner function `bar` uses the scope of outer function `foo`.  This is true even though `foo` has stopped running by the time we run `bar`. 

This breaks our expectation that the scope of `foo` no longer exists when it stops running.

