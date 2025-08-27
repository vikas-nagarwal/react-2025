import React, { useEffect, useState } from "react";
import "../App.css";

const API = () => {
  const [apiData, setData] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1); // buffered page
  const itemsPerPage = 20;

  // Fetch data using async/await
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://picsum.photos/v2/list?page=1&limit=100"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setData(data);
      setDisplayData(data.slice(0, itemsPerPage));
      setPage(1); // reset page
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to load data. Please check your network or API URL.");
    } finally {
      setLoading(false);
    }
  };

  // Load more images
  const loadMore = () => {
    const nextPage = page + 1;
    const start = page * itemsPerPage;
    const end = start + itemsPerPage;
    setDisplayData((prev) => [...prev, ...apiData.slice(start, end)]);
    setPage(nextPage);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="api_data mt-5">
      <div className="container">
        <h2 className="text-center mb-4">Picsum Photo Gallery</h2>

        {/* Loading State */}
        {loading && <p className="text-center">Loading...</p>}

        {/* Error State */}
        {error && (
          <div className="text-center mb-3">
            <p className="text-danger">{error}</p>
            <button className="btn btn-warning" onClick={fetchData}>
              Retry
            </button>
          </div>
        )}

        {/* Gallery */}
        {!loading && !error && displayData.length > 0 && (
          <>
            <div className="row">
              {displayData.map((item) => (
                <div className="col-md-4 col-sm-6 mb-4" key={item.id}>
                  <div className="card shadow-sm h-100 p-3">
                    <img
                      src={`https://picsum.photos/id/${item.id}/400/250`}
                      alt={item.author}
                      className="img-fluid mb-3 rounded"
                      loading="lazy" // Lazy loading
                    />
                    <p>
                      <strong>ID:</strong> {item.id}
                    </p>
                    <p>
                      <strong>Author:</strong> {item.author}
                    </p>

                    <p className="text-center">
                      <a
                        className="btn btn-success btn-sm"
                        href={item.download_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Download
                      </a>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            {displayData.length < apiData.length && (
              <div className="text-center mb-4">
                <button className="btn btn-primary" onClick={loadMore}>
                  Load More
                </button>
              </div>
            )}
          </>
        )}

        {/* No Data */}
        {!loading && !error && displayData.length === 0 && (
          <p className="text-center text-danger">No data available</p>
        )}
      </div>
    </div>
  );
};

export default API;
