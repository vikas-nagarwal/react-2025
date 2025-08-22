import React, { useEffect, useState } from "react";
import "../App.css";

const Userapi = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch("/users.json")
      .then((response) => response.json())
      .then((json) => {
        console.log("API Response:", json);
        setUsers(json);
      })
      .catch((error) => console.error("Fetch Error:", error));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">👥 User & Friends Info</h2>
      <div className="row">
        {users ? (
          users.map((user) => (
            <div key={user.id} className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">ID: {user.id}</h5>
                  <p className="card-title">👤 Name: {user.name}</p>
                  <p className="card-text">📍 City: {user.city}</p>
                  <p className="card-text">🎂 Age: {user.age}</p>

                  {/* Friends Section */}
                  {user.friends && user.friends.length > 0 ? (
                    <>
                      <h6 className="mt-3">🧑‍🤝‍🧑 Friends:</h6>
                      <ul className="list-group list-group-flush">
                        {user.friends.map((friend, index) => (
                          <li key={index} className="list-group-item">
                            🆔 {friend.id ?? "N/A"} - 👤 {friend.name ?? "N/A"}
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <p className="mt-2">😕 No friends listed.</p>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>⏳ Loading users...</p>
        )}
      </div>
    </div>
  );
};

export default Userapi;
