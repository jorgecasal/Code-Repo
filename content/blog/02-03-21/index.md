---
title: What is a script
date: "2021-03-02T22:12:03.284Z"
thumbnail: ./egg.jpg
description: and how do to create one?
---

A script is a series of instructions that a computer can follow
to achieve a specific goal, so a script could be compared to:

- Recipes: By following the steps you can bake a cake.
- Manuals: By following the instructions you can repair your car.

So a script is a set of instructions that a computer can follow step-by-step to get something done.

To write a script you need to determine a specific goal and maybe even break it down in to smaller goals with specific steps.

> You can benefit from writing detailed scripts by keeping this organized and simplifying your code.
> Avoid repetition and of course less code means less bugs.

## Design a script

```js
//greet you by name in the console
//declare a variable with your name
let name = "Johnny"
//declare a function that logs to the console
const hiSayer = name => console.log("hello " + name)
//call the function
hiSayer(name)
```
