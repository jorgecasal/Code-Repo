---
title: Classes
date: "2021-05-01T22:12:03.284Z"
thumbnail: ./egg6.jpg
description: What is a class?
---

As mentioned previously, there is no class mechanism like the ones in object-oriented programming languages. There are, however, features in JavaScript which make "simulating" object-oriented classes possible.

Let's take a quick look at the class syntax that was introduced into JavaScript with ES6, which substantially simplifies the definition of classes (or class-like things) in JavaScript.

In the following example we define a "class" called Person and two Person objects:

class Person {
constructor(name, age) {
this.name = name
this.age = age
}
greet() {
console.log('hello, my name is ' + this.name)
}
}

const adam = new Person('Adam Ondra', 35)
adam.greet()

const janja = new Person('Janja Garnbret', 22)
janja.greet()
When it comes to syntax, the classes and the objects created from them are very reminiscent of Java classes and objects. Their behavior is also quite similar to Java objects. At the core they are still objects based on JavaScript's prototypal inheritance. The type of both objects is actually Object, since JavaScript essentially only defines the types Boolean, Null, Undefined, Number, String, Symbol, BigInt, and Object.

The introduction of the class syntax was a controversial addition. Check out Not Awesome: ES6 Classes or Is “Class” In ES6 The New “Bad” Part? for more details.

The ES6 class syntax is used a lot in "old" React and also in Node.js, hence an understanding of it is beneficial even in this course. However, since we are using the new Hooks feature of React throughout this course, we have no concrete use for JavaScript's class syntax.
