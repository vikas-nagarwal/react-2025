import React, { useState, useEffect } from "react";

function UseEffectDemo() {
  const [count, setCount] = useState(0);

  // useEffect ka example
  useEffect(() => {
    console.log("Count updated:", count);
    document.title = `Value: ${count}`; // Browser tab ka title change karega
  }, [count]); // dependency array -> jab count change hoga tab chalega

  return (
    <div>
      <h1>useEffect Example</h1>
      <p>Value: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default UseEffectDemo;
