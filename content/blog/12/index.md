---
title: (JS) Ensure
date: "2012-03-04T22:12:03.284Z"
thumbnail: ./egg1.jpg
description: (easy)
---

Implement the ensure function so that it throws an error if called without arguments or the argument is undefined. Otherwise it should return the given value.

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
function createCheckDigit(membershipId) {
  let sumMembershipId = aggregator(membershipId)
  while (parseInt(sumMembershipId) > 9)
    sumMembershipId = aggregator(sumMembershipId)
  return sumMembershipId
}

function aggregator(strMembershipId) {
  return strMembershipId
    .toString()
    .split("")
    .reduce((a, b) => parseInt(a) + parseInt(b), 0)
}

console.log(createCheckDigit("55555"))
```

#link

[TESTDOME](https://www.testdome.com/questions/javascript/check-digit/30696?visibility=3&skillId=2&orderBy=Difficulty)
