import React, { useEffect, useState } from "react";
import "../App.css";

const API = () => {
  const [apiData, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data using async/await
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://picsum.photos/v2/list?page=1&limit=100"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setData(data);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to load data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="api_data mt-5">
      <div className="container">
        <h2 className="text-center mb-4">Picsum Photo Gallery</h2>
        <div className="row">
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : error ? (
            <p className="text-center text-danger">{error}</p>
          ) : apiData && apiData.length > 0 ? (
            apiData.map((item) => (
              <div className="col-md-4 col-sm-6 mb-4" key={item.id}>
                <div className="card shadow-sm h-100 p-3">
                  <img
                    src={`https://picsum.photos/id/${item.id}/400/250`}
                    alt={item.author}
                    className="img-fluid mb-3 rounded"
                  />
                  <p>
                    <strong>ID:</strong> {item.id}
                  </p>
                  <p>
                    <strong>Author:</strong> {item.author}
                  </p>
                  <p>
                    <strong>View on Unsplash:</strong>{" "}
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Click Here
                    </a>
                  </p>
                  <p>
                    <strong>Download:</strong>{" "}
                    <a
                      href={item.download_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.download_url}
                    </a>
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-danger">No data available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default API;
