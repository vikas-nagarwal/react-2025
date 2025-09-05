import React, { useState } from "react";

function Useefact() {
  const [count, setCount] = useState(0); // count = value, setCount = update

  return (
    <div>
      <p>Value: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <h1>Useeffect </h1>
    </div>
  );
}

export default Useefact;
