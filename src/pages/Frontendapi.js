import React, { useEffect, useState } from "react";

const Frontendapi = () => {
  const [data, setData] = useState([]); // API data
  const [visible, setVisible] = useState(3); // pehle 3 dikhaenge
  const [id, setId] = useState(""); // User input for ID
  const [filteredData, setFilteredData] = useState([]); // Filtered product by ID

  const showMore = () => {
    setVisible((prev) => prev + 3);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men%27s%20clothing")
      .then((res) => res.json())
      .then((json) => {
        console.log("API Response:", json); // Console output
        setData(json);
        setFilteredData(json); // Initially show all products
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  const handleFilter = () => {
    if (id === "") {
      setFilteredData(data); // agar input empty ho to sab dikha do
    } else {
      const product = data.filter((item) => item.id === Number(id));
      setFilteredData(product);
    }
    setVisible(3); // Reset visible count on new filter
  };

  return (
    <div className="api_Data mt-5">
      <div className="container">
        {/* Filter by ID */}
        <div style={{ padding: "20px" }}>
          <h2>Filter Product by ID</h2>
          <input
            type="number"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Enter product ID"
            className="form-control mb-2"
          />
          <button onClick={handleFilter} className="btn btn-primary">
            Search
          </button>
        </div>

        <h1 className="clothesdata mb-4">Clothes Data</h1>
        <div className="row d-flex flex-wrap">
          {filteredData.length > 0 ? (
            filteredData.slice(0, visible).map((item) => (
              <div className="col-md-4 col-sm-6 col-12 mb-4" key={item.id}>
                <div className="card shadow-sm h-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="card-img-top p-3"
                    style={{ height: "250px", objectFit: "contain" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">
                      <b>ID:</b> {item.id} <br />
                      <b>Price:</b> ₹{item.price} <br />
                      <b>Rating:</b> ⭐ {item.rating.rate} ({item.rating.count})
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No products found...</p>
          )}
        </div>

        {/* Load More Button */}
        {visible < filteredData.length && (
          <div className="text-center mt-4">
            <button
              onClick={showMore}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Frontendapi;
