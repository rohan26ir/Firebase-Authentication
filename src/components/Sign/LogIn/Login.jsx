import React from "react";
import { Link } from "react-router-dom";

const Login = () => {

  const handleLogin = (event) => {
    event.preventDefault();
    
    const email = event.target.elements.email.value ;
    const password =event.target.elements.password.value ;
    
    console.log(email)
    console.log(password)
  }

  
  return (
    <div>
      
      <div className="text-center text-2xl font-bold text-white my-5">
        <h2>This is Register Page</h2>
      </div>

      <div className="w-[30%] mx-auto my-10">
        <div className="card bg-white w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"  // Add name attribute here
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"  // Add name attribute here for password if needed
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <Link to={"/register"}>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register Account</button>
              </div>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
