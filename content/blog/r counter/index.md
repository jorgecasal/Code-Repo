---
title: React Counter
date: "2015-05-01T22:12:03.284Z"
thumbnail: ./arno-smit-qY_yTu7YBT4-unsplash.jpg
description: useState counter?
---

```js
import React, { useState } from "react"
import ReactDOM from "react-dom"

function Counter() {
  const [count, setCount] = useState(0)
  const leFunc = () => setCount(count + 1)
  return <button onClick={leFunc}>{count}</button>
}

ReactDOM.render(<Counter />, document.getElementById("root"))
```
