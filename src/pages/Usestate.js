import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // count = value, setCount = update

  return (
    <div>
      <p>Value: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default Counter;
