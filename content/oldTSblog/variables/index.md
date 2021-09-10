---
title: Step one
date: "2021-05-27"
thumbnail: ./egg4.jpg
description: Let's get started
---

We are not going to start with "What is TypeScript?" because if you are here you already know what you are getting yourself into. However, we are going to start by taking a look at types in JavaScript.
Because let's be honest here, we don't think that much about types when using JavaScript, right?
but we are dealing with types all the time, so lets jump in and prove it.

If we run undefined as a function, we will see that undefined is not a function, and have get thrown a run time TypeError, so if JavaScript didn't have types, we wouldn't be able to get a TypeError

```js
> undefined()
Uncaught TypeError: undefined is not a function
```

If we type in a number, it is always a number.

```js
> 8
8
```

Now, we might later on declare variables in our program that hold that number, but it doesn't always have to hold that number, we can at any time point that to a string instead, and that is a perfectly normal JavaScript thing.

```js
> let num = 8
undefined
> num
8
> num = '8'
'8'
```

Because JavaScript can hold any values, our variable can hold any types at any time, it's the nature of a dynamically typed language.

There are 7 different types in JavaScript as defined by [ECMA](https://www.ecma-international.org/) those are:

- Number
- String
- Boolean
- Undefined
- Null
- Object
- Symbol

They are all incredibly common and we use them all the time without even thinking about them as types, but if we use them incorrectly, we can get an unexpected behavior. That is why a tool such as TypeScript embraces the good stuff of JavaScript making it super powerful.
