---
title: (JS) Ensure
date: "2020-03-04T22:12:03.284Z"
thumbnail: ./egg1.jpg
description: (easy)
---

Implement the ensure function so that it throws an error if called without arguments or the argument is undefined. Otherwise it should return the given value.

#Starting code

```js
function ensure(value) {
  // Your code goes here
}

try {
  console.log(ensure())
} catch (err) {
  console.log(err)
}
```

#Solution

```js
function ensure(value) {
  if (value === undefined) {
    throw new Error("argument undefined")
  } else {
    return value
  }
}

try {
  console.log(ensure())
} catch (err) {
  console.log(err)
}
```

#link

[TESTDOME](https://www.testdome.com/questions/javascript/ensure/35586?visibility=1&skillId=2&orderBy=Difficulty)
