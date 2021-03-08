---
title: on Objects
date: "2015-05-01T22:12:03.284Z"
thumbnail: ./egg5.jpg
---

Introduction to Maps in JavaScript – All You Need to Know
Introduction to Maps in JavaScript feature image
Table of Contents [hide]

Quick introduction to maps
Maps vs Objects
Creating maps in JavaScript
From array to map
From object to map
Adding values to maps
Removing values from maps
Removing all values from maps
Retrieving values from maps
Checking if value exists in map
Getting the size of the map
Iterating over maps
Map.keys(), Map.values() and Map.entries()
Maps, iterators and for…of loop
Map.forEach()
From maps to objects
Conclusion: Introduction to maps in JavaScript
Have you ever heard about maps in JavaScript? Maps are a new object type that was introduced in ES2015. In this tutorial, you will learn all you need to know about this lesser known object type. You will learn about what maps in JavaScript are, how they work and how to use them.
Quick introduction to maps
As a JavaScript developer you probably know JavaScript objects. Objects allow you to store data in the form of a key-value pair. Maps are very similar to JavaScript objects. When you want to store some data in maps, you store those data also in the form of a key-value pair.

Also just like with objects, you can add new keys and delete existing, and retrieve their values from maps. When you compare maps and objects, there are some differences you should know about. Let’s take a look at those differences before moving further.

Maps vs Objects
One of the most important differences is that, when it comes to maps in JavaScript, you can use any data type to create keys. You can use even objects or functions. Objects will allow you to use only strings or a symbols. Another important difference is the order of keys-value pairs.

In maps, keys are ordered based on the order you’ve added them to the map. If you iterate over a map, you will get its keys in the same order in which you’ve created them. In case of objects, this is true since ES2015 and only for JavaScript engines that support this specification. Before ES2015, keys in objects were not ordered.

Another difference is how easy it is to get the size of a map. Like set, every map has a size property that says how many key-value pairs it contains. With objects, you would have to use keys() or values() to get an array of keys or values. Then, use length to get the length of this array to finally get the size of an object.

Another nice thing is that maps, like array, are iterable. You don’t have to get the keys or values first in order to iterate over them. You can do it right away. For example, you can use forEach() method, just like with array. You can also use for…of loop, just like with objects.

The last difference, that is good to know, is that maps are optimized for adding and removing of key-value pairs. Objects are not. This may not matter if you don’t need to manipulate with data often. If you do using maps may help you improve performance of your JavaScript code.

Creating maps in JavaScript
Maps are similar to objects. One thing that is different between them, among the things we just discussed, is how you create them. When you want to create a new object, there are multiple options to do that. For example, you can use new Object(), Object.create(), object literal or object constructor.

When you want to create a new map, there are two ways to do it. Well, theoretically. The first option to create new maps is by creating new empty Map object using new Map() and assigning it values later.

// Creating new map
let myMap = new Map()
From array to map
The second option is also about using new Map() to create new Map object. However, you can also pass in an array. To make this work, this array has to be structured in a specific way. It has to contain nested array for each key-value pair. Each array (key-value pair) has to contain two items, the key and the value.

// Create new map and assign it some values right away
const myMap = new Map([
['name', 'Jackie'],
['gender', 'female'],
['age', 23]
])

// Log the content of "myMap" map
console.log(myMap)
// Output:
// Map { 'name' => 'Jackie', 'gender' => 'female', 'age' => 23 }
From object to map
You can use the second option also with objects. You can take existing object and get all its entries with entries() method. The entries() method returns all entries in the same format as the array you saw in the previous example. So, you can pass the result of calling entries() method to the Map() object.

// Create new object
const myObj = {
subject: 'Math',
level: '1',
difficulty: 'Medium'
}

// Create new map from "myObj"
const myMap = new Map(Object.entries(myObj))

// Log the content of "myMap" map
console.log(myMap)
// Outputs:
// Map { 'subject' => 'Math', 'level' => '1', 'difficulty' => 'Medium' }

// Or, a bit longer
// Create new object
const myObj = {
subject: 'Math',
level: '1',
difficulty: 'Medium'
}

// Get all entries
const myObjEntries = Object.entries(myObj)

// Create new map from "myObjEntries"
const myMap = new Map(myObjEntries)

// Log the content of "myMap" map
console.log(myMap)
// Outputs:
// Map { 'subject' => 'Math', 'level' => '1', 'difficulty' => 'Medium' }
Adding values to maps
When you want to add values, key-value pairs, to an object there are two ways to do that. Well, three, if you count adding values during
