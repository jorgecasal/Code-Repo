---
title: this
date: "2012-03-04T22:12:03.284Z"
thumbnail: ./egg1.jpg
description: What is This?
---

Due to the fact that during this course we are using a version of React containing React Hooks we have no need for defining objects with methods. The contents of this chapter are not relevant to the course but are certainly in many ways good to know. In particular when using older versions of React one must understand the topics of this chapter.

Arrow functions and functions defined using the function keyword vary substantially when it comes to how they behave with respect to the keyword this, which refers to the object itself.

We can assign methods to an object by defining properties that are functions:

const arto = {
name: 'Arto Hellas',
age: 35,
education: 'PhD',
greet: function() {
console.log('hello, my name is ' + this.name)
},
}

arto.greet() // "hello, my name is Arto Hellas" gets printed
Methods can be assigned to objects even after the creation of the object:

const arto = {
name: 'Arto Hellas',
age: 35,
education: 'PhD',
greet: function() {
console.log('hello, my name is ' + this.name)
},
}

arto.growOlder = function() {
this.age += 1
}

console.log(arto.age) // 35 is printed
arto.growOlder()
console.log(arto.age) // 36 is printed
Let's slightly modify the object:

const arto = {
name: 'Arto Hellas',
age: 35,
education: 'PhD',
greet: function() {
console.log('hello, my name is ' + this.name)
},
doAddition: function(a, b) {
console.log(a + b)
},
}

arto.doAddition(1, 4) // 5 is printed

const referenceToAddition = arto.doAddition
referenceToAddition(10, 15) // 25 is printed
Now the object has the method doAddition which calculates the sum of numbers given to it as parameters. The method is called in the usual way, using the object arto.doAddition(1, 4) or by storing a method reference in a variable and calling the method through the variable: referenceToAddition(10, 15).

If we try to do the same with the method greet we run into an issue:

arto.greet() // "hello, my name is Arto Hellas" gets printed

const referenceToGreet = arto.greet
referenceToGreet() // prints "hello, my name is undefined"
When calling the method through a reference, the method loses knowledge of what was the original this. Contrary to other languages, in JavaScript the value of this is defined based on how the method is called. When calling the method through a reference the value of this becomes the so-called global object and the end result is often not what the software developer had originally intended.

Losing track of this when writing JavaScript code brings forth a few potential issues. Situations often arise where React or Node (or more specifically the JavaScript engine of the web browser) needs to call some method in an object that the developer has defined. However, in this course we avoid these issues by using the "this-less" JavaScript.

One situation leading to the "disappearance" of this arises when we set a timeout to call the greet function on the arto object, using the setTimeout function.

const arto = {
name: 'Arto Hellas',
greet: function() {
console.log('hello, my name is ' + this.name)
},
}

setTimeout(arto.greet, 1000)
As mentioned, the value of this in JavaScript is defined based on how the method is being called. When setTimeout is calling the method, it is the JavaScript engine that actually calls the method and, at that point, this refers to the global object.

There are several mechanisms by which the original this can be preserved. One of these is using a method called bind:

setTimeout(arto.greet.bind(arto), 1000)
Calling arto.greet.bind(arto) creates a new function where this is bound to point to Arto, independent of where and how the method is being called.

Using arrow functions it is possible to solve some of the problems related to this. They should not, however, be used as methods for objects because then this does not work at all. We will come back later to the behavior of this in relation to arrow functions.

If you want to gain a better understanding of how this works in JavaScript, the Internet is full of material about the topic, e.g. the screencast series Understand JavaScript's this Keyword in Depth by egghead.io is highly recommended!
