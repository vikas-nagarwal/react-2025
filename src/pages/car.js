import React, { useState, useEffect } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Car = () => {
  const [apiData, setData] = useState(null);

  // useState → API data, loading aur error handle karne ke liye.
  // useEffect → Component mount hote hi API call hoti hai.
  // fetch → Dummy JSON API (https://dummyjson.com/carts) se data fetch karne ke liye.
  useEffect(() => {
    fetch("https://dummyjson.com/carts")
      .then((response) => response.json())
      .then((json) => {
        console.log("API Response:", json); // ✅ Console output
        setData(json); // Storing in state (optional for later use)
      });
  }, []);

  return (
    <div className="api_Data mt-5">
      <div className="container">
        <h1 className="text-center">Carts</h1>
        <div className="row d-flex flex-wrap">
          {apiData ? (
            apiData.carts[0].products.slice(0, 6).map((product) => (
              <div className="col-md-4 col-12 col-sm-3" key={product.id}>
                <div className="card shadow-sm">
                  <div className="row">
                    <div className="col-6">
                      <p>id: {product.id}</p>
                      <p>Price: ₹{product.price}</p>
                    </div>
                  </div>

                  <p>Title: {product.title}</p>
                  <p>Quantity: {product.quantity}</p>
                  <p>Total: ₹{product.total}</p>
                  <p>Discount Percentage: {product.discountPercentage}</p>
                  <p>Discounted Total: ₹{product.discountedTotal}</p>

                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    style={{ height: "150px", objectFit: "cover" }}
                    className="card-img-top mb-2"
                  />
                </div>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Car;
