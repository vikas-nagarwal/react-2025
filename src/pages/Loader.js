import React from "react";

const Loader = () => {
  return (
    <div style={styles.loaderContainer}>
      <div style={styles.spinner}></div>
      <h3 style={{ color: "#555" }}>Loading...</h3>
    </div>
  );
};

const styles = {
  loaderContainer: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#f8f8f8",
  },
  spinner: {
    border: "6px solid #f3f3f3",
    borderTop: "6px solid #3498db",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    animation: "spin 1s linear infinite",
  },
};

// Spinner Animation
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(
  `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`,
  styleSheet.cssRules.length
);

export default Loader;
