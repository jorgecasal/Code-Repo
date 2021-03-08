---
title: On Classes
date: "2015-05-01T22:12:03.284Z"
thumbnail: ./egg6.jpg
description: What is a class?
---

High-order functions: The basics
You may wonder what those three things have to do with high-order functions. The first one about variables not much. However, the second and third, passing functions as arguments and returning functions, a lot. Here is the thing, high-order functions are functions that take another function as an argument, and/or returns another function.

In all examples, where you were passing a function as an argument, or returning a function, you were actually working with high-order functions. You probably expected something more complex than this. Especially due to how many JavaScript developers talk about high-order functions. However, it is really that simple.

// High-order function no.1:
// Function that takes a function as a argument
function myHighOrderFuncOne(myFunc) {
// some code
}

// High-order function no.2:
// Function that returns a function
function myHighOrderFuncTwo() {
// some code

// Return a function
return function() {
// some code
}
}

// High-order function no.3:
// Function that takes a function as a argument
// and also returns a function
function myHighOrderFuncThree(myFunc) {
// some code

// Return a function
return function() {
// some code
}
}
