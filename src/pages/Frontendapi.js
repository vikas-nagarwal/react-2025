import React, { useEffect, useState } from "react";

const Frontendapi = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://dummy.restapiexample.com/api/v1/employees")
      .then((response) => response.json())
      .then((json) => {
        console.log("API Response:", json);
        setData(json);
      });
  }, []);

  return null;
};

export default Frontendapi;
