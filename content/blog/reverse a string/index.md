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

### WeIrD StRiNg CaSe

Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

#### Examples

> Input: "String"
> Output: "StRiNg"
> Input: "Weird string case"
> Output: "WeIrD StRiNg CaSe"

```js
function toWeirdCase(string) {
  str = string.split(" ")
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].split("")
    for (let x = 0; x < str[i].length; x++) {
      if (x % 2 === 0) {
        str[i][x] = str[i][x].toUpperCase()
      } else {
        str[i][x] = str[i][x].toLowerCase()
      }
    }
    str[i] = str[i].join("")
  }
  string = str.join(" ")
  return string
}
```

### Disemvowel Trolls

Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

#### Example

> Input: "This website is for losers LOL!"
> Output: "Ths wbst s fr lsrs LL!"

```js
function disemvowel(str) {
  let arr = str.split("")

  arr.map((e, i) => {
    if (/^[aeiou]$/i.test(e)) {
      return (arr[i] = "")
    }
  })

  return arr.join("")
}
```

### Detect Pangram

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

#### Example

> Input: "The quick brown fox jumps over the lazy dog."
> Output: true
> Input: "This is not a pangram."
> Output: false

```js
function isPangram(string) {
  let abc = "abcdefghijklmnopqrstuvwxyz".split("")
  str = string.toLowerCase()
  return abc.every(x => str.includes(x))
}
```

### Two fighters, one winner.

Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

#### Example

```js
function Fighter(name, health, damagePerAttack) {
  this.name = name
  this.health = health
  this.damagePerAttack = damagePerAttack
  this.toString = function() {
    return this.name
  }
}
```

```js
describe("Example Test Cases", function() {
  Test.assertEquals(
    declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"),
    "Lew"
  )

  Test.assertEquals(
    declareWinner(
      new Fighter("Lew", 10, 2),
      new Fighter("Harry", 5, 4),
      "Harry"
    ),
    "Harry"
  )

  Test.assertEquals(
    declareWinner(
      new Fighter("Harald", 20, 5),
      new Fighter("Harry", 5, 4),
      "Harry"
    ),
    "Harald"
  )

  Test.assertEquals(
    declareWinner(
      new Fighter("Harald", 20, 5),
      new Fighter("Harry", 5, 4),
      "Harald"
    ),
    "Harald"
  )

  Test.assertEquals(
    declareWinner(
      new Fighter("Jerry", 30, 3),
      new Fighter("Harald", 20, 5),
      "Jerry"
    ),
    "Harald"
  )

  Test.assertEquals(
    declareWinner(
      new Fighter("Jerry", 30, 3),
      new Fighter("Harald", 20, 5),
      "Harald"
    ),
    "Harald"
  )
})
```

```js
function declareWinner(fighter1, fighter2, firstAttacker) {
  let winner = ""

  while (fighter1.health > 0 || fighter2.health > 0) {
    if (fighter1.name === firstAttacker) {
      fighter2.health -= fighter1.damagePerAttack
      firstAttacker = fighter2.name
    } else if (fighter2.name === firstAttacker) {
      fighter1.health -= fighter2.damagePerAttack
      firstAttacker = fighter1.name
    }
    if (fighter1.health <= 0) {
      return (winner = fighter2.name)
    }

    if (fighter2.health <= 0) {
      return (winner = fighter1.name)
    }
  }
  console.log(winner)
  return winner
}
```

### Roman Numerals Decoder

Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

Symbol Value
I 1
V 5
X 10
L 50
C 100
D 500
M 1,000

#### Example

> Input: 'XXI'
> Output: 21

```js
function solution(roman) {
  var data = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 }
  var numbers = roman.split("")
  var sum = 0,
    i

  for (i = 0; i < numbers.length; i++) {
    if (data[numbers[i]] < data[numbers[i + 1]]) {
      sum += data[numbers[i + 1]] - data[numbers[i]]
      i++
    } else {
      sum += data[numbers[i]]
    }
  }

  return sum
}
```

```js
function solution(roman) {
  var value = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
  return roman
    .split("")
    .map(d => value[d])
    .reduce((s, v, i, o) => s + (o[i + 1] > v ? -v : v), 0)
}

function solution(roman) {
  var rom = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
  return roman
    .split("")
    .reverse()
    .reduce(function(dec, c, i, rr) {
      c = rom[c]
      i = rom[rr[i - 1]] || 0
      return dec + (i <= c ? c : -c)
    }, 0)
}
```

### Simple Pig Latin

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

#### Tests

> Test.assertEquals(pigIt('Pig latin is cool'),'igPay atinlay siay oolcay')
> Test.assertEquals(pigIt('This is my string'),'hisTay siay ymay tringsay')
