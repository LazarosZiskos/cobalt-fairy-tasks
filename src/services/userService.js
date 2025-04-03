import axios from "axios";

export const getUser = async (userData, token) => {
  try {
    const response = await axios.post("/api/users", userData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    throw error.response?.data || new Error("Something went wrong");
  }
};
