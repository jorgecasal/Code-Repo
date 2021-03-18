---
title: Variables
date: "2021-10-10"
thumbnail: ./egg4.jpg
description: What is a variable, let, const, and var?
---

In JavaScript there are a few ways to go about defining variables:

```js
const x = 1
let y = 5

console.log(x, y) // 1, 5 are printed
y += 10
console.log(x, y) // 1, 15 are printed
y = "aString"
console.log(x, y) // 1, aString are printed
x = 4 // causes an error
```

const does not actually define a variable but a constant for which the value can no longer be changed. On the other hand let defines a normal variable previously known as var.

In the example above, we also see that the type of the data assigned to the variable can change during execution. At the start y stores an integer and at the end a string.

It is also possible to define variables in JavaScript using the keyword var. var was, for a long time, the only way to define variables. const and let were only recently added in version ES6. In specific situations, var works in a different way compared to variable definitions in most languages. During this course the use of var is ill-advised and you should stick with using const and let!
