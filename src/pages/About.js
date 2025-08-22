import { Link } from "react-router-dom";
import Car from "./car";
import React from "react";
import Button from "./Button"; // 🔁 Button component ko import kiya

const About = () => {
  const handleClick = () => {
    alert("Button clicked on Contact page!");
  };

  return (
    <>
      <Car />
      <Button text="Visit Coderssphere" href="https://coderssphere.com" />
    </>
  );
};

export default About;
