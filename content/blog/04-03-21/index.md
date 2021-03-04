---
title: Express server
date: "2021-03-04T22:12:03.284Z"
thumbnail: ./egg1.jpg
description: components and how to use it
---

This is my first post on my new fake blog! How exciting!

I'm sure I'll write a lot more interesting things in the future.

Oh, and here's a great quote from this Wikipedia on
[salted duck eggs](http://en.wikipedia.org/wiki/Salted_duck_egg).

> A salted duck egg is a Chinese preserved food product made by soaking duck
> eggs in brine, or packing each egg in damp, salted charcoal. In Asian
> supermarkets, these eggs are sometimes sold covered in a thick layer of salted
> charcoal paste. The eggs may also be sold with the salted paste removed,
> wrapped in plastic, and vacuum packed. From the salt curing process, the
> salted duck eggs have a briny aroma, a gelatin-like egg white and a
> firm-textured, round yolk that is bright orange-red in color.

Wow! I love blogging so much already.

Did you know that "despite its name, salted duck eggs can also be made from
chicken eggs, though the taste and texture will be somewhat different, and the
egg yolk will be less rich."?
([Wikipedia Link](http://en.wikipedia.org/wiki/Salted_duck_egg))

Yeah, I didn't either.

## The express server

Express is an unopinionated framework for Node.js that helps you to serve your applications in a much easier and cleaner way.

Installation
Express is very simple to install. Simply install it via npm as you would with any other package.

```js
$ npm install express --save
```

Usage
Now that Express is installed, here’s what the most basic server looks like:

```js
const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send("An alligator approaches!")
})

app.listen(3000, () => console.log("Gator app listening on port 3000!"))
```

Now, run this script, and navigate to localhost:3000 in your browser. You should see the message An alligator approaches! in your browser window!

Let’s go over each section of this code to explain how Express works.

Explanation
const express = require('express');
const app = express();

The first line here is grabbing the main Express module from the package you installed. This module is a function, which we then run on the second line to create our app variable. You can create multiple apps this way, each with their own requests and responses.

```js
app.get("/", (req, res) => {
  res.send("An alligator approaches!")
})
```

This bite of code is where we tell our Express server how to handle a GET request to our server. Express includes similar functions for POST, PUT, etc. using app.post(...), app.put(...), etc.

These functions take two main parameters. The first is the URL for this function to act upon. In this case, we are targeting '/', which is the root of our website: in this case, localhost:3000.

The second parameter is a function with two arguments: req, and res. req represents the request that was sent to the server; We can use this object to read data about what the client is requesting to do. res represents the response that we will send back to the client. Here, we are calling a function on res to send back a response: 'An alligator approaches!'.

```js
app.listen(3000, () => console.log("Gator app listening on port 3000!"))
```

Finally, once we’ve set up our requests, we must start our server! We are passing 3000 into the listen function, which tells the app which port to listen on. The function passed-in as the second parameter is optional, and runs when the server starts up. This just gives us some feedback in the console to know that our application is running.

And there we have it, a basic web server! However, we definitely want to send more than just a single line of text back to the client. Let’s briefly cover what middleware is and how to set this server up as a static file server!

Middleware
With Express, we can write and use middleware functions, which have access to ALL http requests coming to the server. These functions can:

Execute any code.
Make changes to the request and the response objects.
End the request-response cycle.
Call the next middleware function in the stack.
We can write our own middleware functions, or use third-party middleware by importing them the same way we would with any other package. Let’s start by writing our own middleware, then we’ll try using some existing middleware to serve static files.

To define a middleware function, we call app.use() and pass it a function. Here’s a basic middleware function to print the current time in the console during every request:

```js
app.use((req, res, next) => {
  console.log("Time: ", Date.now())
  next()
})
```

The next() call tells the middleware to go to the next middleware function, if there is one. This is important to include at the end of our function - otherwise, the request will get stuck on this middleware.

We can optionally pass a path to the middleware, which will only handle requests to that route. For example:

```js
app.use("/nest", (req, res, next) => {
  console.log("Request type: ", req.method)
  next()
})
```

By passing '/nest' as the first argument to app.use(), this function will only run for requests sent to localhost:3000/nest.

Now, let’s try using existing middleware to serve static files. Express comes with a built-in middleware function: express.static. We will also use a third-party middleware function, serve-index, to display an index listing of our files.

First, inside the same folder where the express server is located, create a folder called public and put some files in there (any files will do, perhaps some images of gators).

Then, install the package serve-index:

```js
$ npm install serve-index --save
```

Import the serve-index package at the top of our server file:

```js
const serveIndex = require("serve-index")
```

Now, let’s include the express.static and serveIndex middlewares and tell them the path to access from and the name of our folder:

```js
app.use("/gators", express.static("public"))
app.use("/gators", serveIndex("public"))
```

So there you have it, the Express server in node. For more documentation visit: [expressjs](https://expressjs.com/)
