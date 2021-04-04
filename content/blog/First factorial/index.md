---
title: First factorial
date: "2015-05-01T22:12:03.284Z"
thumbnail: ./pexels-jess-vide-4321133.jpg
description: code test
---

Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it. For example: if num = 4, then your program should return (4 _ 3 _ 2 \* 1) = 24. For the test cases, the range will be between 1 and 18 and the input will always be an integer.

```js
function FirstFactorial(num) {
  let output = 1
  do {
    console.log(num, output)
    output = num * output
    num = num - 1
  } while (num > 0)

  return output
}

// keep this function call here
console.log(FirstFactorial(readline()))
```
