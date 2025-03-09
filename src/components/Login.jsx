import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-color" style={{backgroundColor: "azure"}}>
            <div className="login-container p-4 bg-white rounded shadow" style={{ maxWidth: "400px", width: "100%" }}>
                <h3 className="text-center mb-3">Login</h3>
                <form>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Enter password" required />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Login</button>
                    <p>If you are not slogin</p>
                    <Link to='/register' ><button type="submit" className="btn btn-primary w-100">SignUp</button></Link>
                </form>
            </div>
        </div>
    )
}

export default Login;