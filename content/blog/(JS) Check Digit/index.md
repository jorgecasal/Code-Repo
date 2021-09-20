---
title: (JS) Check Digit
date: "2021-10-10"
thumbnail: ./egg4.jpg
description: (easy)
---

Your company assigns each customer a membership ID, and you are implementing a check digit for those IDs.

The check digit should be calculated by adding up all digits in each membership ID. If the result of the sum is a number with more than a single digit, another iteration is required, and the digits of the result also should be added together. This process should repeat until a single-digit number is calculated.

For example, for the membership ID "55555" the sum of all digits is 25. Because this is not a single-digit number, 2 and 5 would be added, and the result, 7, would be the check digit.

#Starting code

```js
function createCheckDigit(membershipId) {
  // Write the code that goes here.
  return 0
}

console.log(createCheckDigit("55555"))
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
