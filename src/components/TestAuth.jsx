import React, { useContext } from "react";
import MyButton from "./MyButton.jsx";
import { AuthContext } from "../context/AuthContext.jsx";
import "./TestAuth.scss";

const TestAuth = () => {
  const { token, logout, login } = useContext(AuthContext);

  if (!token) {
    return (
      <div className="test-container">
        <p style={{ font: "bolder", fontSize: "24px" }}>
          You are not logged in.
        </p>
        <MyButton text="Login" variant="secondary" onClick={login} />
      </div>
    );
  } else {
    return (
      <div className="test-container">
        <p style={{ font: "bolder", fontSize: "24px" }}>You're logged in!</p>
        <p>JWT: {token}</p>
        <MyButton text="Logout" variant="primary" onClick={logout} />
      </div>
    );
  }
};

export default TestAuth;
