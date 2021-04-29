---
title: Object Interaction exercise
date: "2015-05-01T22:12:03.284Z"
thumbnail: ./pexels-jess-vide-4321133.jpg
description: Building a library app
---

How can we use objects to model a real-life library in our JavaScript code? Let's put together a rough plan of attack for our library application.

## README.md

Your instructions are as follows:

1) In the Library.js file, add a constructor method to the Library class. In the constructor method, initialize the following properties: books, patrons.

2) In the Book.js file, add a constructor method to the Book class. In the constructor method, initialize the following properties: title, author, isbn.

3) In the Patron.js file, add a constructor method to the Patron class. In the constructor method, initialize the following properties: name, email, currentBook.

Don't forget to add parameters for any values that need to be passed in to each of the constructor methods.

### Plan of Attack for Library Application
Remember, this is a rough plan - things might change as we start to develop this project further. But for now, this is our starting place. Also, this is just an overall description of the application - as this course progresses, we'll walk through the construction of each of these pieces together.

#### Library Class
Properties:

>books
>patrons

Methods:

>addBook()
>addPatron()

#### Book Class
Properties:

>title
>author
>ISBN

#### Patron Class
Properties:

>name
>email
>currentBook

Methods:

>checkOut()
>returnBook()

## Solution: Building Constructor Methods

#### Constructor Method for Library Class
The constructor method for the Library class (located inside the class declaration in the Library.js file) initializes two properties: books and patrons.

These properties are initialized to empty arrays inside the constructor method and no values are passed in.

Eventually, the addBook() and addPatron() methods we will write later on will be used to populate these arrays.

```js
class Library {
    constructor(){
        this.books = [];
        this.patrons = [];
    }
}
```

#### Constructor Method for Book Class
The constructor method for the Book class initializes three properties: title, author, and isbn. These values must all be passed to the constructor method when a new Book object is created.

The idea is that when a new Book object is created, it can be added to the Library object’s books property (an array) via the addBook() method on the Library class.

```js
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
```

#### Constructor Method for Patron Class
The constructor method for the Patron class will initialize three properties: name, email, and currentBook.

name and email will both be string values that are passed to the constructor method when a new Patron object is created. Because each Patron has a unique email address, this property can also be used as a way to identify one Patron from the next.

The currentBook property will initially be set to null, since a new Patron has not yet checked out a book. We don’t need to pass in any values for the currentBook property. Later, when we write the checkOut() and returnBook() methods, this property will be updated.

```js
class Patron {
    constructor(name, email){
        this.name = name;
        this.email = email;
        this.currentBook = null;
    }
}
```

## instruction: Adding Methods to the Library Class

Now that we have some basic objects to play with, let's flesh them out by adding some methods. We'll start with methods to add books and patrons to the Library objects.

Your instructions are as follows:

1) In the Library.js file, add two methods to the Library class: addPatron() and addBook()

- addPatron() receives one argument, a Patron object. This object (stored in the patron variable) should be added to the Library object's (stored in thelibrary variable) patrons property, which is an array.

- addBook() receives one argument, a Book object. This object (stored in the book variable) should be added to the Library object's books property, which is an array.

## Solution: Adding Methods to the Library Class

#### The addBook() Method
The addBook() method is a method we need to add to the Library class. Adding it to the Library class means that it will be available on any Library objects that are created.

The addBook() method is our way of entering a new book into the library’s system. It should receive one argument - the actual Book object that’s being added.

When the method is called on the Library object, the method should take the Book object that's passed in and push it onto the Library object’s books property, which, if you recall, was initialized as an empty array.

```js
addBook(book) {
    this.books.push(book)
}
```
So You Know...
push() is an array method - that means you can call it on any array. It receives one argument - an element, or array of elements, that should be added to the end of the array that the push() method is called on.

You can see the documentation for the push() method here. Keep this one in your arsenal - it’s a very handy method!

#### The addPatron() Method
The addPatron() method on the Library class works identically to the addBook() method.

```js
addPatron(patron) {
    this.patrons.push(patron);
}
```