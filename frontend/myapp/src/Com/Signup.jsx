import React from "react";
import "./Signup.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    companyName: "",
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value, type } = event.target;

    if (type === "checkbox") {
      setFormData({ ...formData, [name]: event.target.checked });
    } else if (type === "radio") {
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/rachna/character",
        formData // Just send formData directly
      );
      if (response.status !== 201) {
        // Check response status
        throw new Error("Error creating account");
      }

      console.log("Account created:", response.data);
      alert("Account created successfully!");
     
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div class="main-bg">
      <div class="container">
        <div class="row justify-content-center mt-5">
          <div class="w-100">
            <div class="card shadow">
              <div class="card-title text-center border-bottom">
                <h2 class="p-3">Signup </h2>
              </div>
              <div class="card-body">
                <form onSubmit={handleSubmit}>
                  <div class="mb-4">
                    <label for="username" class="form-label">
                      Full name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      onChange={handleChange}
                      id="username"
                      name="username"
                      value={formData.username}
                    />
                  </div>
                  <div class="mb-4">
                    <label for="username" class="form-label">
                      Phone number
                    </label>
                    <input
                      type="tel"
                      class="form-control"
                      onChange={handleChange}
                      name="phoneNumber"
                      value={formData.phoneNumber}
                    />
                  </div>
                  <div class="mb-4">
                    <label for="username" class="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      onChange={handleChange}
                      name="email"
                      id="email"
                      value={formData.email}
                    />
                  </div>
                  <div class="mb-4">
                    <label for="password" class="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      onChange={handleChange}
                      id="password"
                      name="password"
                      value={formData.password}
                    />
                  </div>
                  <div class="mb-4">
                    <label for="company" class="form-label">
                      Company name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      onChange={handleChange}
                      id="cname"
                      name="companyName"
                      value={formData.companyName}
                    />
                  </div>

                  <div
                    class="d-grid gap-2 col- mx-auto"
                    style={{ width: "18rem" }}
                  >
                    <button class="btn btn-primary" type="submit">
                      create account
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
