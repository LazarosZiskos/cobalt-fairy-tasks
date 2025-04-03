/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect } from "react";
import axios from "axios";

// TASK 2 //

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  // Load token on page refresh
  useEffect(() => {
    const stored = localStorage.getItem("token");
    if (stored) setToken(stored);
  }, []);

  // Login the user using Axios POST and store the token
  const login = async () => {
    try {
      const response = await axios.post("/api/login", {
        username: "dev1",
        password: "12cf#$!@34",
      });
      const jwt = response.data.token;
      setToken(jwt);
      localStorage.setItem("token", jwt);
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  //logout the user by removing the token and clearing local storage
  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
