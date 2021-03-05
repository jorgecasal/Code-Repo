---
title: Express server
date: "2021-03-04T22:12:03.284Z"
thumbnail: ./egg1.jpg
description: components and how to use it
---

## The express server

Expressjs is an unopinionated framework for Node.js that helps you to serve your applications in a much easier and cleaner way.

To install it simply run:

```js
$ npm install express --save
```

After installing take this template:

```js
const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send("Robots are alive!")
})

app.listen(3000, () => console.log("Server up and running on port 3000!"))
```

Run this file, and see what surprise is waiting for you on localhost:3000

Let’s take it step by step.

```js
const express = require("express")
const app = express()
```

The first line requires the Express module from the package you installed. Then we assign this function on the second line to create our app variable.

```js
app.get("/", (req, res) => {
  res.send("Robots are alive!")
})
```

This part is where the Express server handles GET request to our server. Express can also be used with POST, PUT, DELETE. using app.post(...), app.put(...), app.delete(...).

These functions take two arguments. A URL, in our case, we are targeting '/', which is the root of our website: so, localhost:3000. And a function with two arguments: req, and res. req is the request sent to the server. res is representing the response that we will send back to the client. Here, we are calling a function on res to send back a response: 'Robots are alive!'.

```js
app.listen(3000, () => console.log("Server up and running on port 3000!"))
```

====================================================================

Then with out requests set up, we must start our server! We are passing 3000 into the listen function, which tells the app which port to listen on. The function passed-in as the second parameter is optional, and runs when the server starts up. This just gives us some feedback in the console to know that our application is running.

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
