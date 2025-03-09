import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="signup-container p-4 bg-white rounded shadow" style={{ maxWidth: "400px", width: "100%" }}>
                <h3 className="text-center mb-3">Sign Up</h3>
                <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter full name" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Enter password" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm password" required />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Sign Up</button>
                    <p>If you already login</p>
                    <Link to='/login' ><button type="submit" className="btn btn-primary w-100">Login</button></Link>
                </form>
            </div>
        </div>
    )
}

export default SignUp;



