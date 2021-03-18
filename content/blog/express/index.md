---
title: Express server
date: "2021-03-04T22:12:03.284Z"
thumbnail: ./express.jpg
description: its components and how to use it
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

We tell the app which port to listen on, in this case we said 3000. The function passed-in as the second parameter is optional, and runs when the server starts. This could be a simple message to let us know that the app is running.

And there we have it, our brand new server!

##Middleware
We can write functions that have access to all http requests, these functions can for example:

Execute code.
Make changes to the request and/or response.
End the request and/or response.
Call the next middleware.

To define a middleware function, we call app.use() and pass it a function. How about console logging the time for example:

```js
app.use((req, res, next) => {
  console.log("Time: ", Date.now())
  next()
})
```

The next() only makes our middleware to continue to the next function.

We can optionally pass a path to the middleware, which will only handle requests to that route. For example:

```js
app.use("/something", (req, res, next) => {
  console.log("Request type: ", req.method)
  next()
})
```

By passing '/something' as the first argument to app.use(), this function will only run for requests sent to localhost:3000/something.

Now, let’s try using existing middleware to serve static files. Express comes with a built-in middleware function: express.static. We will also use a third-party middleware function, serve-index, to display an index listing of our files.

First, inside the same folder where the express server is located, create a folder called public and put some HTML in there for example

Then, install the package serve-index:

```js
$ npm install serve-index --save
```

Import the serve-index package at the top:

```js
const serveIndex = require("serve-index")
```

Now, let’s include the express.static and serveIndex middlewares and tell them the path to access from and the name of our folder:

```js
app.use("/something", express.static("public"))
app.use("/something", serveIndex("public"))
```

and that is the express server. Need further info? checkout [expressjs](https://expressjs.com/).
