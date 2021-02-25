---
title: It's all blue
date: "2019-05-06"
thumbnail: ./cody-davis-253928-unsplash.jpg
description: What if everything you knew was turned to blue?
---
---

## An Code example with PrismJS
Gatsby-Starter-Julia uses the Atom Editor Theme.

```js
console.log("Hello World");
```

## Default NodeJS server

```js
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```