import React, { useEffect, useState } from "react";
import "../App.css";

const Object = () => {
  const [apiuser, setApiuser] = useState(null);

  useEffect(() => {
    fetch("https://api.restful-api.dev/objects")
      .then((response) => response.json())
      .then((json) => {
        console.log("API Response:", json);
        setApiuser(json);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        {apiuser ? (
          apiuser.map((apis) => (
            <div
              key={apis.id}
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
            >
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{apis.name}</h5>
                  <p className="card-text">ID: {apis.id}</p>
                  <p className="card-text">
                    Color: {apis.data?.color || "N/A"}
                  </p>
                  <p className="card-text">
                    Capacity: {apis.data?.capacity || "N/A"}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Loading users...</p>
        )}
      </div>
    </div>
  );
};

export default Object;
