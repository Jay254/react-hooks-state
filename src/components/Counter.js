import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    console.log('Before: ', count)
    setCount((currentCount) => currentCount + 1);
    setCount((currentCount) => currentCount + 1);
    console.log('After: ', count)
  }

  return <button onClick={increment}>I have been clicked {count} times</button>;
}

export default Counter;
