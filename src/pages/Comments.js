import "../App.css";
import React, { useEffect, useState } from "react";

const Comments = () => {
  const [apiData, setData] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/comments")
      .then((response) => response.json())
      .then((json) => {
        console.log("API Response:", json);
        setData(json);
      });
  }, []);

  return (
    <>
      <div className="api_Data mt-5">
        <div className="container">
          <div className="row">
            {apiData ? (
              apiData.comments.map((comment) => (
                <div key={comment.id} className="col-4 col-md-4 mb-3">
                  <div className="p-3 border rounded">
                    {/* <h5>ID: {comment.id}</h5> */}
                    <p>
                      <strong>Body:</strong> {comment.body}
                    </p>
                    <p>
                      <strong>Post ID:</strong> {comment.postId}
                    </p>
                    <p>
                      <strong>Likes:</strong> {comment.likes}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>

      <div className="container py-4">
        <div className="col-12 col-md-3 mb-4">
          <p>text</p>
        </div>
      </div>
    </>
  );
};

export default Comments;
