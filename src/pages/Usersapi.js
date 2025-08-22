import React, { useEffect, useState } from "react";
import "../App.css";

const Userapi = () => {
  const [apiuser, setApiuser] = useState(null); // ✅ renamed "data" to "setApiuser"

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        console.log("API Response:", json);
        setApiuser(json); // ✅ store array directly
      });
  }, []);

  return (
    <div className="container">
      <div className="row d-flex">
        <div className="col-12">
          {apiuser ? (
            apiuser.map(
              (
                apis // ✅ directly map the array
              ) => (
                <div key={apis.id} className="card mb-3">
                  <div className="col-4">
                    <h5 className="card-title">{apis.name}</h5>
                    <p className="card-text">{apis.email}</p>
                    <p className=""> {apis.username}</p>
                    <h5 className="card-title">{apis.address.street}</h5>
                  </div>
                </div>
              )
            )
          ) : (
            <p>Loading users...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Userapi;
