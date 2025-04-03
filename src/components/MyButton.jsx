import React from "react";
import "./MyButton.scss";

// TASK 4 - Reusable Styled Button Component with variants  //

const MyButton = ({ text, variant = "primary", ...props }) => {
  return (
    <button className={`my-button ${variant}`} {...props}>
      <p>{text}</p>
    </button>
  );
};

export default MyButton;
