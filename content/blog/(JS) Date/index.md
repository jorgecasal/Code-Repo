---
title: (JS) Date
date: "2015-05-01T22:12:03.284Z"
thumbnail: ./egg2.jpg
description: (easy)
---

Write a function that converts user entered date formatted as M/D/YYYY to a format required by an API (YYYYMMDD). The parameter "userDate" and the return value are strings.

For example, it should convert user entered date "12/31/2014" to "20141231" suitable for the API.

#Starting code

```js
function formatDate(userDate) {
  // format from M/D/YYYY to YYYYMMDD
}

console.log(formatDate("12/31/2014"))
```

#Solution

```js
function formatDate(userDate) {
  userDate = userDate.split("/")
  if (userDate[0].length < 2) {
    userDate[0] = "0" + userDate[0]
  }
  if (userDate[1].length < 2) {
    userDate[1] = "0" + userDate[1]
  }
  return userDate[2] + userDate[0] + userDate[1]
}

console.log(formatDate("12/31/2014"))
```

#link

[TESTDOME](https://www.testdome.com/questions/javascript/date/8521?visibility=3&skillId=2&orderBy=Difficulty)
