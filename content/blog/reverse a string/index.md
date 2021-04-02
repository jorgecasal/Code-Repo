---
title: Reverse a string
date: "2015-05-01T22:12:03.284Z"
thumbnail: ./elizeu-dias-xarhNpLSHTk-unsplash.jpg
description: .split() .reverse() .join()
---

```js
function FirstReverse(str) {
  console.log(str.split(""))
  console.log(str.split("").reverse())
  console.log(
    str
      .split("")
      .reverse()
      .join("")
  )

  return str
    .split("")
    .reverse()
    .join("")
}

// keep this function call here
console.log(FirstReverse(readline()))
```
