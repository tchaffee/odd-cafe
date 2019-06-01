---
templateKey: blog-post
title: JavaScript and Scope
date: 2019-06-01T22:18:12.276Z
description: The basics of scope in Javascript
featuredpost: false
featuredimage: /img/scope.jpg
tags:
  - javascript
  - programming
  - basics
  - scope
---
What is Scope?

Scope determines where a variable exists and does not exist in a program. For example:

```js
function bar () {
  var foo = 2;
  console.log(foo); // 2
}

bar();

console.log(foo); // ReferenceError: foo is not defined;
```

Scope also determines which value to use when we have two different variables with the same name. For example:

Iframe here:
<iframe width="100%" height="300" src="//jsfiddle.net/tchaffee/L4h60y79/1/embedded/js/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

JS here:
<script async src="//jsfiddle.net/tchaffee/L4h60y79/1/embed/js/"></script>

Code example:
```js
var foo = 1;

function bar () {
  var foo = 2;
  console.log(foo); // 2
}

bar();

console.log(foo) // 1;
```

If you run the example above, you will first see '2' logged to the console, and then you will see '1'. The `foo` created inside the `bar` function is a different variable from the `foo` created at the top of the program.




