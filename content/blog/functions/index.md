---
title: functions
date: "2015-05-01T22:12:03.284Z"
thumbnail: ./egg3.jpg
---

We have already become familiar with defining arrow functions. The complete process, without cutting corners, to defining an arrow function is as follows:

const sum = (p1, p2) => {
console.log(p1)
console.log(p2)
return p1 + p2
}
and the function is called as can be expected:

const result = sum(1, 5)
console.log(result)
If there is just a single parameter, we can exclude the parentheses from the definition:

const square = p => {
console.log(p)
return p \* p
}
If the function only contains a single expression then the braces are not needed. In this case the function only returns the result of its only expression. Now, if we remove console printing, we can further shorten the function definition:

const square = p => p \* p
This form is particularly handy when manipulating arrays - e.g. when using the map method:

const t = [1, 2, 3]
const tSquared = t.map(p => p \* p)
// tSquared is now [1, 4, 9]
The arrow function feature was added to JavaScript only a couple of years ago, with version ES6. Prior to this the only way to define functions was by using the keyword function.

There are two ways by which the function can be referenced; one is giving a name in a function declaration.

function product(a, b) {
return a \* b
}

const result = product(2, 6)
// result is now 12
The other way to define the function is using a function expression. In this case there is no need to give the function a name and the definition may reside among the rest of the code:

const average = function(a, b) {
return (a + b) / 2
}

const result = average(2, 5)
// result is now 3.5
During this course we will define all functions using the arrow syntax.
