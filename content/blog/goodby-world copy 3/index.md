---
title: On functions
date: "2015-05-01T22:12:03.284Z"
description: yeah man
thumbnail: ./egg3.jpg
---

Yeah, I didn't either.

## Default NodeJS server

```js
const http = require("http")

const hostname = "127.0.0.1"
const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader("Content-Type", "text/plain")
  res.end("Hello World\n")
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
```
