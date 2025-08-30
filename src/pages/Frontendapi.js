import React, { useEffect, useState } from "react";

const Frontendapi = () => {
  const [data, setData] = useState([]); // API data
  const [visible, setVisible] = useState(3); // pehle 3 dikhaenge

  const showMore = () => {
    setVisible((prev) => prev + 3); // click par aur 3 add
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men%27s%20clothing")
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="api_Data mt-5">
      <div className="container">
        <h1 className="clothesdata mb-4">Clothes Data</h1>
        <div className="row d-flex flex-wrap">
          {data.length > 0 ? (
            data.slice(0, visible).map((item) => (
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
            <p>Loading...</p>
          )}
        </div>

        {/* Load More Button */}
        {visible < data.length && (
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
