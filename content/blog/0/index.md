---
title: React Toggle
date: "2021-05-01T22:12:03.284Z"
thumbnail: ./eirik-uhlen-LsPVs1ho8qw-unsplash.jpg
description: useState toggle?
---

```js
import React, { useState } from "react"
import ReactDOM from "react-dom"

function Toggle() {
  const [toggle, setToggle] = useState("ON")

  const leFunc = () => {
    toggle === "ON" ? setToggle("OFF") : setToggle("ON")
  }

  return <button onClick={leFunc}>{toggle}</button>
}

ReactDOM.render(<Toggle />, document.getElementById("root"))
```
