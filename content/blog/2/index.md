---
title: code challenges
date: "2021-05-01T22:12:03.284Z"
thumbnail: ./elizeu-dias-xarhNpLSHTk-unsplash.jpg
description: some code challenges
---

## Reverse a string

Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.

##### Solution

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

## First Fractional

Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it. For example: if num = 4, then your program should return (4 _ 3 _ 2 \* 1) = 24. For the test cases, in tthe range will be between 1 and 18 and the input will always be an integer.

##### Solution

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

## Longest Word

Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.

### Examples

> Input: "fun&!! time"
> Output: time
> Input: "I love dogs"
> Output: love

##### Solution

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

## String ends with?

Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

### Examples

> Input: 'abc', 'bc'
> Output: true
> Input: 'abc', 'd'
> Output: false

##### Solution

```js
function solution(str, ending) {
  return str.endsWith(ending) ? true : false
}
```

## WeIrD StRiNg CaSe

Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

### Examples

> Input: "String"
> Output: "StRiNg"
> Input: "Weird string case"
> Output: "WeIrD StRiNg CaSe"

##### Solution

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

## Disemvowel Trolls

Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

### Example

> Input: "This website is for losers LOL!"
> Output: "Ths wbst s fr lsrs LL!"

##### Solution

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

## Detect Pangram

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

### Example

> Input: "The quick brown fox jumps over the lazy dog."
> Output: true
> Input: "This is not a pangram."
> Output: false

##### Solution

```js
function isPangram(string) {
  let abc = "abcdefghijklmnopqrstuvwxyz".split("")
  str = string.toLowerCase()
  return abc.every(x => str.includes(x))
}
```

## Two fighters, one winner.

Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

### Example

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

#### Tests

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

##### Solution

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

## Roman Numerals Decoder

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

### Example

> Input: 'XXI'
> Output: 21

##### Solution

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

##### Solution

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

## Simple Pig Latin

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

### Examples

> Input: 'Pig latin is cool'
> Output: 'igPay atinlay siay oolcay'
> Input: 'Hello world !'
> Output: 'elloHay orldway !'

#### Tests

> Test.assertEquals(pigIt('Pig latin is cool'),'igPay atinlay siay oolcay')
> Test.assertEquals(pigIt('This is my string'),'hisTay siay ymay tringsay')

##### Solution 1

```js
function pigIt(str) {
  str = str.split(" ")
  str.map((word, index) => {
    if (/[^a-zA-Z0-9]/.test(word)) {
      return word
    } else {
      str[index] = str[index].substring(1) + str[index][0] + "ay"
    }
  })
  return str.join(" ")
}
```

##### Solution 2

```js
function pigIt(str) {
  return str.replace(/(\w)(\w*)(\s|$)/g, "$2$1ay$3")
}
```

##### Solution 3

```js
function pigIt(str) {
  return str.replace(/\w+/g, w => {
    return w.slice(1) + w[0] + "ay"
  })
}
```

### Count characters in your string

The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

#### Tests

> Test.assertDeepEquals(count("aba"), { a: 2, b: 1 });
> Test.assertDeepEquals(count(""), {});

##### Solution 1

```js
function count(string) {
  let obj = {}
  for (i = 0; i < string.length; i++) {
    if (obj[string[i]]) {
      obj[string[i]] += 1
    } else {
      obj[string[i]] = 1
    }
  }
  return obj
}
```

##### Solution 2

```js
function count(string) {
  var count = {}
  string.split("").forEach(function(s) {
    count[s] ? count[s]++ : (count[s] = 1)
  })
  return count
}
```

##### Solution 3

```js
function count(string) {
  return string.split("").reduce(function(counts, char) {
    counts[char] = (counts[char] || 0) + 1
    return counts
  }, {})
}
```

## Human Readable Time

Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.

#### Tests

```js
describe("examples", function() {
  it("should format correctly", function() {
    Test.assertEquals(humanReadable(0), "00:00:00", "humanReadable(0)")
    Test.assertEquals(humanReadable(59), "00:00:59", "humanReadable(5)")
    Test.assertEquals(humanReadable(60), "00:01:00", "humanReadable(60)")
    Test.assertEquals(humanReadable(86399), "23:59:59", "humanReadable(86399)")
    Test.assertEquals(
      humanReadable(359999),
      "99:59:59",
      "humanReadable(359999)"
    )
  })
})
```

##### Solution 1

```js
function humanReadable(seconds) {
  let hh = 0
  let mm = 0
  let ss = 0
  for (let i = 0; seconds > i; i++) {
    ss++
    if (hh === 100) {
      hh = 99
      mm = 59
      ss = 59
    }
    if (mm === 59 && ss === 60) {
      hh += 1
      mm = 0
      ss = 0
    }
    if (ss === 60) {
      mm += 1
      ss = 0
    }
  }
  let time = `${(hh < 10 ? "0" : "") + hh}:${(mm < 10 ? "0" : "") + mm}:${(ss <
  10
    ? "0"
    : "") + ss}`
  return time
}
```

##### Solution 2

```js
function humanReadable(seconds) {
  var pad = function(x) {
    return x < 10 ? "0" + x : x
  }
  return (
    pad(parseInt(seconds / (60 * 60))) +
    ":" +
    pad(parseInt((seconds / 60) % 60)) +
    ":" +
    pad(seconds % 60)
  )
}
```

##### Solution 3

```js
function humanReadable(seconds) {
  var hours = parseInt(seconds / 3600)
  var minutes = parseInt(seconds / 60) % 60
  var seconds = seconds % 60

  var pad = function(val) {
    return val < 10 ? "0" + val : val
  }

  return pad(hours) + ":" + pad(minutes) + ":" + pad(seconds)
}
```

## Does my number look big in this?

A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcisstic:

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

and 1652 (4 digits), which isn't:

    1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

The Challenge:

Your code must return true or false depending upon whether the given number is a Narcissistic number in base 10.

Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

#### Tests

```js
describe("Narcissistic Function", function() {
  it("should find small numbers are all narcissistic", function() {
    Test.assertEquals(narcissistic(7), true, "7 is narcissistic")
  })

  it("should find these numbers are narcissistic", function() {
    Test.assertEquals(narcissistic(371), true, "371 is narcissistic")
  })

  it("should find these numbers are narcissistic", function() {
    Test.assertEquals(narcissistic(1652), false, "1652 is not narcissistic")
  })
})
```

##### Solution

```js
function narcissistic(value) {
  let num = 0
  let valueArr = value.toString().split("")
  for (i = 0; valueArr.length > i; i++) {
    num = num + valueArr[i] ** valueArr.length
  }
  return value === num ? true : false
}
```

## Decode the Morse code

Part of Series 1/3
This kata is part of a series on the Morse code. After you solve this kata, you may move to the next one.

In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superseded by voice and digital data communication channels, it still has its use in some applications around the world.
The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−− ·−−− ··− −·· ·.

NOTE: Extra spaces before or after the code have no meaning and should be ignored.

In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.

Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

For example:

decodeMorse('.... . -.-- .--- ..- -.. .')
//should return "HEY JUDE"
NOTE: For coding purposes you have to use ASCII characters . and -, not Unicode characters.

The Morse code table is preloaded for you as a dictionary, feel free to use it:

Coffeescript/C++/Go/JavaScript/Julia/PHP/Python/Ruby/TypeScript: MORSE_CODE['.--']
C#: MorseCode.Get(".--") (returns string)
Elixir: @morse_codes variable (from use MorseCode.Constants). Ignore the unused variable warning for morse_codes because it's no longer used and kept only for old solutions.
Elm: MorseCodes.get : Dict String String
Haskell: morseCodes ! ".--" (Codes are in a Map String String)
Java: MorseCode.get(".--")
Kotlin: MorseCode[".--"] ?: "" or MorseCode.getOrDefault(".--", "")
Rust: MORSE_CODE
Scala: morseCodes(".--")
Swift: MorseCode[".--"] ?? "" or MorseCode[".--", default: ""]
C: provides parallel arrays, i.e. morse[2] == "-.-" for ascii[2] == "C"
All the test strings would contain valid Morse code, so you may skip checking for errors and exceptions. In C#, tests will fail if the solution code throws an exception, please keep that in mind. This is mostly because otherwise the engine would simply ignore the tests, resulting in a "valid" solution.

Good luck!

#### Tests

```js
describe("Example from description", function() {
  Test.assertEquals(decodeMorse(".... . -.--   .--- ..- -.. ."), "HEY JUDE")
})

describe("Your own tests", function() {
  Test.assertEquals(decodeMorse("···−−−···"), "SOS")
})
```

##### Solution 1

```js
function decodeMorse(morseCode) {
  morseCode = morseCode.split("   ")
  let arr = []
  let decoded = ""
  morseCode.map((e, i) => {
    arr.push(e.split(" "))
  })
  arr.map((e, i) => {
    for (let x = 0; e.length > x; x++) {
      if (e[x] === "···−−−···") {
        arr[i][x] = "SOS"
      } else {
        arr[i][x] = MORSE_CODE[e[x]]
      }
    }
  })
  decoded = arr.join(" ").replace(/,/g, "")
  while (decoded.startsWith(" ")) {
    decoded = decoded.substring(1)
  }
  return decoded
}
```

##### Solution 2

```js
decodeMorse = function(morseCode) {
  function decodeMorseLetter(letter) {
    return MORSE_CODE[letter]
  }
  function decodeMorseWord(word) {
    return word
      .split(" ")
      .map(decodeMorseLetter)
      .join("")
  }
  return morseCode
    .trim()
    .split("   ")
    .map(decodeMorseWord)
    .join(" ")
}
```

##### Solution 3

```js
decodeMorse = function(morseCode) {
  return morseCode
    .trim()
    .split(/  | /)
    .map(code => MORSE_CODE[code] || " ")
    .join("")
}
```

## The Hashtag Generator

The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

- It must start with a hashtag (#).
- All words must have their first letter capitalized.
- If the final result is longer than 140 chars it must return false.
- If the input or the result is an empty string it must return false.

### Examples

> " Hello there thanks for trying my Kata" => "#HelloThereThanksForTryingMyKata"
> " Hello World " => "#HelloWorld"
> "" => false

#### Tests

```js
Test.assertEquals(
  generateHashtag(""),
  false,
  "Expected an empty string to return false"
)
Test.assertEquals(
  generateHashtag(" ".repeat(200)),
  false,
  "Still an empty string"
)
Test.assertEquals(
  generateHashtag("Do We have A Hashtag"),
  "#DoWeHaveAHashtag",
  "Expected a Hashtag (#) at the beginning."
)
Test.assertEquals(
  generateHashtag("Codewars"),
  "#Codewars",
  "Should handle a single word."
)
Test.assertEquals(
  generateHashtag("Codewars Is Nice"),
  "#CodewarsIsNice",
  "Should remove spaces."
)
Test.assertEquals(
  generateHashtag("Codewars is nice"),
  "#CodewarsIsNice",
  "Should capitalize first letters of words."
)
Test.assertEquals(
  generateHashtag("code" + " ".repeat(140) + "wars"),
  "#CodeWars"
)
Test.assertEquals(
  generateHashtag(
    "Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"
  ),
  false,
  "Should return false if the final word is longer than 140 chars."
)
Test.assertEquals(
  generateHashtag("a".repeat(139)),
  "#A" + "a".repeat(138),
  "Should work"
)
Test.assertEquals(generateHashtag("a".repeat(140)), false, "Too long")
```

##### Solution 1

```js
function generateHashtag(str) {
  str = str.split(" ")
  let hashtag = "#"
  let arr = []
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "") {
      str[i] = str[i].replace(/^\w/, x => x.toUpperCase())
      arr.push(str[i])
    }
  }
  hashtag = hashtag + arr.join("")
  if (hashtag === "#" || hashtag.length > 140) {
    return false
  } else {
    return hashtag
  }
}
```

##### Solution 2

```js
function generateHashtag(str) {
  return str.length > 140 || str === ""
    ? false
    : "#" +
        str
          .split(" ")
          .map(capitalize)
          .join("")
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
```

##### Solution 3

```js
function generateHashtag(str) {
  if (!str || str.length < 1) return false

  var r =
    "#" +
    str
      .split(" ")
      .map(function(el) {
        return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase()
      })
      .join("")
  return r.length > 140 ? false : r
}
```

## Calculating with Functions

This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));

#### Tests

```js
Test.assertEquals(seven(times(five())), 35)
Test.assertEquals(four(plus(nine())), 13)
Test.assertEquals(eight(minus(three())), 5)
Test.assertEquals(six(dividedBy(two())), 3)
Test.assertEquals(seven(plus(three())), 10)
```

##### Solution 1

```js
function zero(x) {
  if (typeof x === "string") {
    x = x.split("")
    if (x[0] === "p") {
      return 0 + parseInt(x[1])
    }
    if (x[0] === "m") {
      return 0 - parseInt(x[1])
    }
    if (x[0] === "t") {
      return 0 * parseInt(x[1])
    }
    if (x[0] === "d") {
      return Math.floor(0 / parseInt(x[1]))
    }
  } else {
    return 0
  }
}
function one(x) {
  if (typeof x === "string") {
    x = x.split("")
    if (x[0] === "p") {
      return 1 + parseInt(x[1])
    }
    if (x[0] === "m") {
      return 1 - parseInt(x[1])
    }
    if (x[0] === "t") {
      return 1 * parseInt(x[1])
    }
    if (x[0] === "d") {
      return Math.floor(1 / parseInt(x[1]))
    }
  } else {
    return 1
  }
}
function two(x) {
  if (typeof x === "string") {
    x = x.split("")
    if (x[0] === "p") {
      return 2 + parseInt(x[1])
    }
    if (x[0] === "m") {
      return 2 - parseInt(x[1])
    }
    if (x[0] === "t") {
      return 2 * parseInt(x[1])
    }
    if (x[0] === "d") {
      return Math.floor(2 / parseInt(x[1]))
    }
  } else {
    return 2
  }
}
function three(x) {
  if (typeof x === "string") {
    x = x.split("")
    if (x[0] === "p") {
      return 3 + parseInt(x[1])
    }
    if (x[0] === "m") {
      return 3 - parseInt(x[1])
    }
    if (x[0] === "t") {
      return 3 * parseInt(x[1])
    }
    if (x[0] === "d") {
      return Math.floor(3 / parseInt(x[1]))
    }
  } else {
    return 3
  }
}
function four(x) {
  if (typeof x === "string") {
    x = x.split("")
    if (x[0] === "p") {
      return 4 + parseInt(x[1])
    }
    if (x[0] === "m") {
      return 4 - parseInt(x[1])
    }
    if (x[0] === "t") {
      return 4 * parseInt(x[1])
    }
    if (x[0] === "d") {
      return Math.floor(4 / parseInt(x[1]))
    }
  } else {
    return 4
  }
}
function five(x) {
  if (typeof x === "string") {
    x = x.split("")
    if (x[0] === "p") {
      return 5 + parseInt(x[1])
    }
    if (x[0] === "m") {
      return 5 - parseInt(x[1])
    }
    if (x[0] === "t") {
      return 5 * parseInt(x[1])
    }
    if (x[0] === "d") {
      return Math.floor(5 / parseInt(x[1]))
    }
  } else {
    return 5
  }
}
function six(x) {
  if (typeof x === "string") {
    x = x.split("")
    if (x[0] === "p") {
      return 6 + parseInt(x[1])
    }
    if (x[0] === "m") {
      return 6 - parseInt(x[1])
    }
    if (x[0] === "t") {
      return 6 * parseInt(x[1])
    }
    if (x[0] === "d") {
      return Math.floor(6 / parseInt(x[1]))
    }
  } else {
    return 6
  }
}
function seven(x) {
  if (typeof x === "string") {
    x = x.split("")
    if (x[0] === "p") {
      return 7 + parseInt(x[1])
    }
    if (x[0] === "m") {
      return 7 - parseInt(x[1])
    }
    if (x[0] === "t") {
      return 7 * parseInt(x[1])
    }
    if (x[0] === "d") {
      return Math.floor(7 / parseInt(x[1]))
    }
  } else {
    return 7
  }
}
function eight(x) {
  if (typeof x === "string") {
    x = x.split("")
    if (x[0] === "p") {
      return 8 + parseInt(x[1])
    }
    if (x[0] === "m") {
      return 8 - parseInt(x[1])
    }
    if (x[0] === "t") {
      return 8 * parseInt(x[1])
    }
    if (x[0] === "d") {
      return Math.floor(8 / parseInt(x[1]))
    }
  } else {
    return 8
  }
}
function nine(x) {
  if (typeof x === "string") {
    x = x.split("")
    if (x[0] === "p") {
      return 9 + parseInt(x[1])
    }
    if (x[0] === "m") {
      return 9 - parseInt(x[1])
    }
    if (x[0] === "t") {
      return 9 * parseInt(x[1])
    }
    if (x[0] === "d") {
      return Math.floor(9 / parseInt(x[1]))
    }
  } else {
    return 9
  }
}

function plus(x) {
  return `p${x}`
}
function minus(x) {
  return `m${x}`
}
function times(x) {
  return `t${x}`
}
function dividedBy(x) {
  return `d${x}`
}
```

##### Solution 2

```js
function zero(func) {
  return func ? func(0) : 0
}
function one(func) {
  return func ? func(1) : 1
}
function two(func) {
  return func ? func(2) : 2
}
function three(func) {
  return func ? func(3) : 3
}
function four(func) {
  return func ? func(4) : 4
}
function five(func) {
  return func ? func(5) : 5
}
function six(func) {
  return func ? func(6) : 6
}
function seven(func) {
  return func ? func(7) : 7
}
function eight(func) {
  return func ? func(8) : 8
}
function nine(func) {
  return func ? func(9) : 9
}

function plus(b) {
  return function(a) {
    return a + b
  }
}
function minus(b) {
  return function(a) {
    return a - b
  }
}
function times(b) {
  return function(a) {
    return a * b
  }
}
function dividedBy(b) {
  return function(a) {
    return a / b
  }
}
```

##### Solution 3

```js
;[
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
].forEach(function(name, n) {
  this[name] = function(f) {
    return f ? f(n) : n
  }
})

function plus(n) {
  return function(a) {
    return a + n
  }
}
function minus(n) {
  return function(a) {
    return a - n
  }
}
function times(n) {
  return function(a) {
    return a * n
  }
}
function dividedBy(n) {
  return function(a) {
    return a / n
  }
}
```

## Valid Parentheses

Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

### Examples

> "()" => true
> ")(()))" => false
> "(" => false
> "(())((()())())" => true

#### Tests

```js
Test.assertEquals(validParentheses("()"), true)
Test.assertEquals(validParentheses("())"), false)
Test.assertEquals(validParentheses(")())"), false)
Test.assertEquals(validParentheses("())("), false)
```

##### Solution 1

```js
function validParentheses(parens) {
  let result = 0

  for (let i = 0; parens.length > i; i++) {
    if (parens.startsWith(")") || parens.endsWith("(") || result < 0) {
      return false
    }
    if (parens[i] === "(") {
      result = result + 1
    }
    if (parens[i] === ")") {
      result = result - 1
    }
  }
  return result === 0 ? true : false
}
```

##### Solution 2

```js
function validParentheses(parens) {
  let n = 0
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] == "(") n++
    if (parens[i] == ")") n--
    if (n < 0) return false
  }

  return n == 0
}
```

##### Solution 3

```js
function validParentheses(parens) {
  let indent = 0

  for (let i = 0; i < parens.length && indent >= 0; i++) {
    indent += parens[i] == "(" ? 1 : -1
  }

  return indent == 0
}
```

## String ends with?

Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

### Examples

> solution('abc', 'bc') // returns true
> solution('abc', 'd') // returns false

#### Tests

```js
Test.assertEquals(solution("abcde", "cde"), true)
Test.assertEquals(solution("abcde", "abc"), false)
```

##### Solution 1

```js
function solution(str, ending) {
  return str.endsWith(ending) ? true : false
}
```

##### Solution 2

```js
function solution(str, ending) {
  return new RegExp(ending + "$", "i").test(str)
}
```

##### Solution 3

```js
function solution(str, ending) {
  if (typeof str != "string" || typeof ending != "string") throw "wrong type"
  if (ending.length > str.length) return false
  return str.substr(str.length - ending.length, ending.length) == ending
}
```

## Who likes it?

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

### Examples

> likes [] -- must be "no one likes this"
> likes ["Peter"] -- must be "Peter likes this"
> likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
> likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
> likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"

#### Tests

```js
describe("example tests", function() {
  it("should return correct text", function() {
    Test.assertEquals(likes([]), "no one likes this")
    Test.assertEquals(likes(["Peter"]), "Peter likes this")
    Test.assertEquals(likes(["Jacob", "Alex"]), "Jacob and Alex like this")
    Test.assertEquals(
      likes(["Max", "John", "Mark"]),
      "Max, John and Mark like this"
    )
    Test.assertEquals(
      likes(["Alex", "Jacob", "Mark", "Max"]),
      "Alex, Jacob and 2 others like this"
    )
  })
})
```

##### Solution 1

```js
function likes(names) {
  if (names.length === 0) {
    return "no one likes this"
  }
  if (names.length === 1) {
    return `${names[0]} likes this`
  }
  if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`
  }
  if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  }
  if (names.length > 3) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
  }
}
```

##### Solution 2

```js
function likes(names) {
  names = names || []
  switch (names.length) {
    case 0:
      return "no one likes this"
      break
    case 1:
      return names[0] + " likes this"
      break
    case 2:
      return names[0] + " and " + names[1] + " like this"
      break
    case 3:
      return names[0] + ", " + names[1] + " and " + names[2] + " like this"
      break
    default:
      return (
        names[0] +
        ", " +
        names[1] +
        " and " +
        (names.length - 2) +
        " others like this"
      )
  }
}
```

##### Solution 3

```js
function likes(names) {
  return {
    0: "no one likes this",
    1: `${names[0]} likes this`,
    2: `${names[0]} and ${names[1]} like this`,
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
  }[Math.min(4, names.length)]
}
```

##### Solution 4

```js
function likes(names) {
  var templates = [
    "no one likes this",
    "{name} likes this",
    "{name} and {name} like this",
    "{name}, {name} and {name} like this",
    "{name}, {name} and {n} others like this",
  ]
  var idx = Math.min(names.length, 4)

  return templates[idx].replace(/{name}|{n}/g, function(val) {
    return val === "{name}" ? names.shift() : names.length
  })
}
```

function upArray(arr){
if(arr.every(elem => elem >= 0)){
arr = arr.join('')
let total = parseInt(arr) +1;
console.log(total)
let result = total.toString()
result = result.split('')
for (let i = 0; i < result.length; i++){
result[i] = parseInt(result[i])
if(result[i] < 0){
result = null
}
}
return result
} else {
return null
}
}
