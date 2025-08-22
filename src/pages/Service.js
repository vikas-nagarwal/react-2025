// src/pages/Api.js
import React, { useEffect, useState } from "react";
import "../App.css";

const Api = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ Added loading state

  useEffect(() => {
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/hello")
      .then((res) => res.json())
      .then((result) => {
        setApiData(result);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="api_Data mt-5">
      <div className="container">
        <h1 className="text-center mb-4">Dictionary Result</h1>

        <div className="row d-flex flex-wrap">
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : apiData.length > 0 ? (
            apiData.map((item, index) => (
              <div className="col-md-4 col-12 col-sm-6" key={index}>
                <div className="card shadow-sm p-3 mb-4">
                  <h5>
                    <strong>Word:</strong> {item.word}
                  </h5>
                  <p>
                    <strong>Phonetic:</strong> {item.phonetic || "N/A"}
                  </p>
                  <p>
                    <strong>Part of Speech:</strong>{" "}
                    {item.meanings?.[0]?.partOfSpeech || "N/A"}
                  </p>
                  <p>
                    <strong>Definition:</strong>{" "}
                    {item.meanings?.[0]?.definitions?.[0]?.definition || "N/A"}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-danger">No data found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Api;
