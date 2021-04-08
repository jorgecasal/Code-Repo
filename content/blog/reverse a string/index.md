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

---

function capital(word) {
console.log('help func arg =', word)
word.split("")
for (i = 0; i < word.length; i += 1){
if (i % 2 == 0) {
word[i] = word[i].toUpperCase()
}
}
return word.join("");
console.log('after help func =', word)
}

function capital(word) {
console.log('func arg =', word)
for (i = 0; i < word.length; i += 1){

console.log('func arg element =', word[i])
word[i] = word[i].toUpperCase();
  
 }
return word

}

function toWeirdCase(string){
let words = string.split(" ")
const regex = / /g;
for (i = 0; i < words.length; i += 1){
console.log(i)
if (regex.test(words[i]) === false){
capital(words);
}
return words.join(" ")
}

return words
}

function toWeirdCase(string){
let arr = string.split(" ");
let i = 0;
let newArr = [];
for (const letter of arr) {
for (x = 0; x < letter.length; x += 1){
if (x % 2 == 0) {
newArr.push(letter[x].toUpperCase())
} else {
newArr.push(letter[x])
}
}
i++
}
return newArr.join("");
}

// const regex = / /g;
// for (i = 0; i < string.length; i += 1){
// if (regex.test(string[i]) === false){
// if (i % 2 == 0) {
// string[i] = 'Å'
// }
// }
// }
