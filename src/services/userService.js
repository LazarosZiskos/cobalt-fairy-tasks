import axios from "axios";

// Task 3 - Send user data to API with JWT authentication

// Submits user form data to the API
// Uses JWT in the Authorization header for authenticated access
export const getUser = async (userData, token) => {
  try {
    const response = await axios.post("/api/users", userData, {
      headers: {
        // Set the Authorization header with the JWT token as required
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    throw error.response?.data || new Error("Something went wrong");
  }
};
