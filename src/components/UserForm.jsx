import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { getUser } from "../services/userService";
import { userSchema } from "../validation";
// import "./UserForm.scss";
import MyButton from "./MyButton";

// TASK 3 //

const UserForm = () => {
  const { token } = useContext(AuthContext);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
  });

  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);

    const result = userSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors = {};
      result.error.errors.forEach((err) => {
        fieldErrors[err.path[0]] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    try {
      const result = await getUser(formData, token);
      setMessage(`User created! ID: ${result.user_id}, Name: ${formData.name}`);
      setFormData({ name: "", surname: "", email: "", phone: "" });
      setErrors({});
    } catch (err) {
      throw new Error(err);
    }
  };

  return (
    <div>
      <h2>Create New User</h2>
      <form onSubmit={handleSubmit} className="user-form-container">
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}
        <input
          name="surname"
          placeholder="Surname"
          value={formData.surname}
          onChange={handleChange}
        />
        {errors.surname && <p className="error">{errors.surname}</p>}
        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
        <input
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <p className="error">{errors.phone}</p>}
        <MyButton text="Submit" variant="secondary" type="submit" />
      </form>

      {message && <p className="success">{message}</p>}
    </div>
  );
};

export default UserForm;
