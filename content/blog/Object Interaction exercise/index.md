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