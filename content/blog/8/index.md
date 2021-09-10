---
title: Objects
date: "2015-05-01T22:12:03.284Z"
thumbnail: ./egg5.jpg
description: What is an object?
---

There are a few different ways of defining objects in JavaScript. One very common method is using object literals, which happens by listing its properties within braces:

const object1 = {
name: 'Arto Hellas',
age: 35,
education: 'PhD',
}

const object2 = {
name: 'Full Stack web application development',
level: 'intermediate studies',
size: 5,
}

const object3 = {
name: {
first: 'Dan',
last: 'Abramov',
},
grades: [2, 3, 5, 3],
department: 'Stanford University',
}
The values of the properties can be of any type, like integers, strings, arrays, objects...

The properties of an object are referenced by using the "dot" notation, or by using brackets:

console.log(object1.name) // Arto Hellas is printed
const fieldName = 'age'
console.log(object1[fieldName]) // 35 is printed
You can also add properties to an object on the fly by either using dot notation or brackets:

object1.address = 'Helsinki'
object1['secret number'] = 12341
The latter of the additions has to be done by using brackets, because when using dot notation, secret number is not a valid property name because of the space character.

Naturally, objects in JavaScript can also have methods. However, during this course we do not need to define any objects with methods of their own. This is why they are only discussed briefly during the course.

Objects can also be defined using so-called constructor functions, which results in a mechanism reminiscent of many other programming languages, e.g. Java's classes. Despite this similarity, JavaScript does not have classes in the same sense as object-oriented programming languages. There has been, however, an addition of the class syntax starting from version ES6, which in some cases helps structure object-oriented classes.
