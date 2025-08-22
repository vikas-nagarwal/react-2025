import React, { useState, useEffect } from "react";
import "../App.css";

function Todas() {
  const [todadata, todasetData] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((response) => response.json())
      .then((json) => {
        console.log("API Response:", json);
        todasetData(json);
      });
  }, []);

  return (
    <div className="todasdiv">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center mb-4">Todo List</h2>

            {todadata ? (
              <ul className="list-group">
                {todadata.todos.map((item) => (
                  <li
                    className={`list-group-item d-flex justify-content-between ${
                      item.completed ? "list-group-item-success" : ""
                    }`}
                    key={item.id}
                  >
                    <span>{item.todo}</span>
                    <span>
                      {item.completed ? "✅ Completed" : "⌛ Pending"} | User
                      ID: {item.userId}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Loading todos...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todas;
