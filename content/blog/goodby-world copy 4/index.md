---
title: On loops
date: "2015-05-01T22:12:03.284Z"
thumbnail: ./egg4.jpg
---

This is my first post on my new fake blog! How exciting!

I'm sure I'll write a lot more interesting things in the future.

> charcoal paste. The eggs may also be sold with the salted paste removed,
> wrapped in plastic, and vacuum packed. From the salt curing process, the
> salted duck eggs have a briny aroma, a gelatin-like egg white and a
> firm-textured, round yolk that is bright orange-red in color.

![Chinese Salty Egg]

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
