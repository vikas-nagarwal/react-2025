import React, { useState, useEffect } from "react";

function Frontendapi() {
  const [apiData, setData] = useState(null);

  useEffect(() => {
    fetch("https://dummy.restapiexample.com/api/v1/employees")
      .then((response) => response.json())
      .then((json) => {
        console.log("API Response:", json);
        setData(json);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return null;
}

export default Frontendapi;
