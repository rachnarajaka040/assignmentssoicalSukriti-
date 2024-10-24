import React from 'react'
import { Link } from 'react-router-dom';
function LandingPage() {
    return (
        <div class="container mt-5 d-flex justify-content-center">
            <div class="card p-3" style={{ width: "500px", height: "600px", border: "2px solid black" }}>
                <div style={{ marginTop: "50%" }}>
                    <h1>This is my Mern Project</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, doloremque.</p>
                    <div class="d-grid gap-2 col-2 mx-auto" style={{ width: "18rem" }}>
                        <Link to="/signup"><button class="btn btn-primary w-100" type="button">Create Account</button></Link>
                        <Link to="/login"><button class="btn btn-primary w-100" type="button">Already Registered? Login</button></Link>
                        <Link to="/userdata"><button class="btn btn-primary w-100" type="button">User Data</button></Link>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
