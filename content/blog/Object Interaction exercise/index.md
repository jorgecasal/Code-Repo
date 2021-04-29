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
## instruction: Checking Out and Returning Books

1) Inside the Book class, add three properties to the constructor method: out, dueDate, and patron.

- The out property should be initialized to false
- The dueDate property should be initialized to null
- The patron property should be initialized to null

### Updating our Plan of Attack

Sometimes, as we go through coding a project, our initial plan gets changed. Sometimes you might discover new things to be implemented or new ideas to incorporate. Sometimes you realize things you had included in the initial plan don’t make sense anymore, or that the way you built something wasn’t the best way to build it.

That’s totally normal, and it’s just part of the iterative process of coding something.

In this case, we realized that we needed to add some new properties to the Book class: patron, dueDate, and out. These properties can all be added to the constructor method.

The patron property, represents the Patron that currently has the book checked out, if there is one. It’s initially set to null but can be set to the Patron object that’s checked out the book. This will probably happen in the checkOut() method we’ll add to the Patron class.

The out property represents whether or not a Book object is checked out - it’s set to a boolean value (true or false). We’ll include it in the constructor method so that all Book objects have an initial out value of false. This value will also get updated in the checkOut() method.

## Solution: New Properties to the Book Class

```js
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.patron = null;
        this.dueDate = null;
        this.out = false;
    }
}
```
The patron and dueDate properties are set to null because when a new Book object is instantiated, it has not been checked out by a Patron and thus is has no due date set. Similarly, the out property is set to false.

## Solution: checkOut() and returnBook() Methods

Solution for the checkOut() Method
The checkOut() method in the Patron class is how we’re modeling the process of a real-life Library patron checking out a book.

It sets the currentBook property on the Patron object to the Book object they’re checking out. It also sets the patron property on the Book object to the Patron that’s borrowing the book.

The out property on the Book object is set to true and its due date is calculated and set.

```js
checkOut(book){
        this.currentBook = book;
        book.out = true;
        book.patron = this;

        const newDueDate = new Date();
        newDueDate.setDate(newDueDate.getDate() + 14);
        book.dueDate = newDueDate;
}
```
Solution for the returnBook() method
The returnBook() method does the opposite of the checkOut() method. Just like in real life, it undoes the check out process. Here’s the code the returnBook() method:

```js
returnBook(book) {
        this.currentBook = null;
        book.out = false;
        book.patron = null;
        book.dueDate = null;
}
```

## Solution: A Better Way With Setter Methods

The setter method, called out(), should receive one argument (this can also be called out, or any other variable name that makes sense to you). This argument is the value that the _out backing property will be set to - true or false. The Book object either is, or isn’t checked out.

This setter method is also meant to calculate the Book’s due date. If the book is marked out, the due date should be calculated as two weeks from today. If the book is marked in, the due date should be set back to null.

Calculating the due date is done using the JavaScript Date object. The Date object, like any other object, needs to be instantiated:

```js
 const newDueDate = new Date();
```

Each new Date object is automatically initialized to the current time and date. Then we can use the setDate() method (available on all Date objects) to change the due date to two weeks from today.

To do this, we need to get the day value (for example 5, if it's November 5, 2018) from the Date object, and then add 14 to it. The getDate() method will return that day value. This all looks like this:

```js
newDueDate.setDate(newDueDate.getDate() + 14);
```
Once we’ve done that, we can update the dueDate property so that the completed setter method looks like this:

```js
set out(out){
        this._out = out;

        if (out) {
            const newDueDate = new Date();
            newDueDate.setDate(newDueDate.getDate() + 14);
            this.dueDate = newDueDate;
        } else {
            this.dueDate = null;
        }
}
```
#### Solution for the Getter Method

Since the setter method sets the _out property, we need a getter method to return the value of the _out property. It’s true that this property could be accessed directly by using this._out, but that’s not good practice. Because we’ll be setting it using out we should be accessing it the same way.

```js
get out() {
        return this._out;
}
```

#### Solution: Refactored checkOut() and returnBook() Methods

The checkOut() and returnBook() methods on the Patron class are a lot simpler now:

```js
checkOut(book){
    this.currentBook = book;
    book.out = true;
    book.patron = this;
}
```
```js
returnBook(book) {
    this.currentBook = null;
    book.out = false;
    book.patron = null;
}
```

#### Solution: Refactored Constructor Method on Book Class

```js
constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.patron = null;
    this.dueDate = null;
    this._out = false;
}
```