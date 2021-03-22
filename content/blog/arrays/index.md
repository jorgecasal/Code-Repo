---
title: Arrays
date: "2015-05-01T22:12:03.284Z"
thumbnail: ./egg2.jpg
description: What is an array
---

Here is an array and a couple of examples of its use:

```js
const x = [1, -1, 3]

x.push(5)

console.log(x.length) // 4 is printed to the console
console.log(x[1]) // -1 is printed to the console

x.forEach(i => {
  console.log(i) // numbers 1, -1, 3, 5 are printed to the console, one per line
})
```

Notable in this example is the fact that the contents of the array can be modified even though it is defined as a const. Because the array is an object the variable always points to the same object. However, the content of the array changes as new items are added to it.

One way of iterating through the items of the array is using forEach as seen in the example. forEach receives a function defined using the arrow syntax as a parameter.

```js
i => {
  console.log(i)
}
```

###forEach
calls the function for each of the items in the array, always passing the individual item as a parameter. The function as the parameter of forEach may also receive other parameters.

In the previous example, a new item was added to the array using the method push, so now lets checkout the concat method.

```js
const x = [1, -1, 3]

const x2 = x.concat(5)

console.log(x) // [1, -1, 3] is printed to the console
console.log(x2) // [1, -1, 3, 5] is printed to the console
```

The method call x.concat(5) does not add a new item to the old array but returns a new array which, besides containing the items of the old array, also contains the new item.

There are plenty of useful methods defined for arrays. Let's look at a short example of using the map method.

```js
const x = [1, 2, 3]

const y1 = x.map(i => i * 2)

console.log(y1) // [2, 4, 6] is printed to the console
```

Based on the old array, map creates a new array, for which the function given as a parameter is used to create the items. In the case of this example the original value is multiplied by two.

Map can also transform the array into something completely different:

```js
const y2 = x.map(i => "<li>" + i + "</li>")
console.log(y2)
// [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ] is printed to the console
```

Here an array filled with integer values is transformed into an array containing strings of HTML using the map method.

Individual items of an array are easy to assign to variables with the help of the destructuring assignment.

```js
const x = [1, 2, 3, 4, 5]

const [first, second, ...rest] = x

console.log(first, second) // 1, 2 is printed to the console

console.log(rest) // [3, 4 ,5] is printed to the console
```

Thanks to the assignment, the variables first and second will receive the first two integers of the array as their values. The remaining integers are "collected" into an array of their own which is then assigned to the variable rest.
