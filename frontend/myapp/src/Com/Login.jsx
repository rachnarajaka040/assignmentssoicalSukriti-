import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
function Login() {
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem('myFormData', JSON.stringify(formData));
        document.getElementById('email').value = "";
        document.getElementById('password').value = "";
     
    };

    return (
        <div class="main-bg">
            <div class="container">
                <div class="row justify-content-center mt-5">
                    <div class="w-100">
                        <div class="card shadow">
                            <div class="card-title text-center border-bottom">
                                <h2 class="p-3">LoginUp </h2>
                            </div>
                            <div class="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div class="mb-4">
                                        <label for="username" class="form-label">Full name</label>
                                        <input type="text" class="form-control" onChange={handleChange} id="username" name="username" />
                                    </div>
                                    <div class="mb-4">
                                        <label for="username" class="form-label">Email</label>
                                        <input type="email" class="form-control" name="email" id="email" onChange={handleChange} />
                                    </div>
                                    <div class="mb-4">
                                        <label for="password" class="form-label">Password</label>
                                        <input type="password" onChange={handleChange} class="form-control" id="password" name="password" />
                                    </div>
                                    <div class="d-grid gap-2 col- mx-auto" style={{ width: "18rem" }}>
                                        <button class="btn btn-primary" type="submit">Login</button>

                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login