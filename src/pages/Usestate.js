import React, { useState } from "react";

function Usestate() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count < 10 ? count + 1 : count)}>
        Increase
      </button>
      <button onClick={() => setCount(count > 0 ? count - 1 : count)}>
        Decrease
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
export default Usestate;
