---
title: Arrays
date: "2015-05-01T22:12:03.284Z"
thumbnail: ./egg2.jpg
description: What is an array
---

An array and a couple of examples of its use:

const t = [1, -1, 3]

t.push(5)

console.log(t.length) // 4 is printed
console.log(t[1]) // -1 is printed

t.forEach(value => {
console.log(value) // numbers 1, -1, 3, 5 are printed, each to own line
})  
Notable in this example is the fact that the contents of the array can be modified even though it is defined as a const. Because the array is an object the variable always points to the same object. However, the content of the array changes as new items are added to it.

One way of iterating through the items of the array is using forEach as seen in the example. forEach receives a function defined using the arrow syntax as a parameter.

value => {
console.log(value)
}
forEach calls the function for each of the items in the array, always passing the individual item as a parameter. The function as the parameter of forEach may also receive other parameters.

In the previous example, a new item was added to the array using the method push. When using React, techniques from functional programming are often used. One characteristic of the functional programming paradigm is the use of immutable data structures. In React code, it is preferable to use the method concat, which does not add the item to the array, but creates a new array in which the content of the old array and the new item are both included.

const t = [1, -1, 3]

const t2 = t.concat(5)

console.log(t) // [1, -1, 3] is printed
console.log(t2) // [1, -1, 3, 5] is printed
The method call t.concat(5) does not add a new item to the old array but returns a new array which, besides containing the items of the old array, also contains the new item.

There are plenty of useful methods defined for arrays. Let's look at a short example of using the map method.

const t = [1, 2, 3]

const m1 = t.map(value => value \* 2)
console.log(m1) // [2, 4, 6] is printed
Based on the old array, map creates a new array, for which the function given as a parameter is used to create the items. In the case of this example the original value is multiplied by two.

Map can also transform the array into something completely different:

const m2 = t.map(value => '<li>' + value + '</li>')
console.log(m2)  
// [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ] is printed
Here an array filled with integer values is transformed into an array containing strings of HTML using the map method. In part 2 of this course, we will see that map is used quite frequently in React.

Individual items of an array are easy to assign to variables with the help of the destructuring assignment.

const t = [1, 2, 3, 4, 5]

const [first, second, ...rest] = t

console.log(first, second) // 1, 2 is printed
console.log(rest) // [3, 4 ,5] is printed
Thanks to the assignment, the variables first and second will receive the first two integers of the array as their values. The remaining integers are "collected" into an array of their own which is then assigned to the variable rest.
