---
title: Reverse a string
date: "2015-05-01T22:12:03.284Z"
thumbnail: ./elizeu-dias-xarhNpLSHTk-unsplash.jpg
description: .split() .reverse() .join()
---

Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.

```js
let str = "Hello"

function stringReverse(str) {
  console.log(str.split(""))
  console.log(str.split("").reverse())
  console.log(
    str
      .split("") //[ 'H', 'e', 'l', 'l', 'o' ]
      .reverse() //[ 'o', 'l', 'l', 'e', 'H' ]
      .join("") //olleH
  )

  return str
    .split("")
    .reverse()
    .join("")
}

stringReverse(str)
```

### Longest Word

Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.

#### Examples

> Input: "fun&!! time"
> Output: time
> Input: "I love dogs"
> Output: love

```js
function LongestWord(sen) {
  let senSplit = sen.replace(/[^A-Za-z0-9\ ]/g, "").split(" ")
  let longestWord = 0
  for (let i = 0; i < senSplit.length; i += 1) {
    if (senSplit[i].length > longestWord) {
      longestWord = senSplit[i].length
      sen = senSplit[i]
    }
  }
  return sen
}
```

### String ends with?

Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

#### Examples

> Input: 'abc', 'bc'
> Output: true
> Input: 'abc', 'd'
> Output: false

```js
function solution(str, ending) {
  return str.endsWith(ending) ? true : false
}
```
