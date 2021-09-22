---
title: (JS) Remove Property
date: "2021-05-01T22:12:03.284Z"
thumbnail: ./eirik-uhlen-LsPVs1ho8qw-unsplash.jpg
description: (easy)
---

Implement the removeProperty function which takes an object and property name, and does the following:

If the object obj has a property prop, the function removes the property from the object and returns true; in all other cases it returns false.

#Starting code

```js
function removeProperty(obj, prop) {
  return null
}
```

#Solution

```js
function removeProperty(obj, prop) {
  if (prop in obj) {
    delete obj[prop]
    return true
  } else {
    return false
  }
}
```

#link

[TESTDOME](https://www.testdome.com/questions/javascript/remove-property/35859?visibility=1&skillId=2&orderBy=Difficulty)
