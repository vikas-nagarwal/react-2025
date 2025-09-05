import React, { useState } from "react";

function Usestate() {
  const [count, setCount] = useState(0); // count = value, setCount = update

  return (
    <div>
      <p>Value: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <h1>use statement</h1>
    </div>
  );
}

export default Usestate;
