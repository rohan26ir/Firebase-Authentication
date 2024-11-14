import { sendPasswordResetEmail } from "firebase/auth";
import React, { useRef, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../Firebase/FirebaseG";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(false);
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const emailRef = useRef();
  const navigate = useNavigate()

  // for useContext
  const { signInUser } = useContext(AuthContext)

  const handleLogin = (event) => {
    event.preventDefault();
    
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    
    setSuccess(false);
    setErrorMessage('');

    signInUser(email, password)
      .then((result) => {
        setUser(result.user);
        event.target.reset();
        navigate('/')

        if (!result.user.emailVerified) {
          setErrorMessage('Please verify your email');
        } else {
          setSuccess(true);
        }
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setUser(null);
      });
  };

  const handleForgetPass = () => {
    const email = emailRef.current.value;

    if (!email) {
      setErrorMessage("Please provide an email address.");
    } else {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          alert("Password reset email sent to your email.");
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }
  };

  return (
    <div>
      <div className="text-center text-2xl font-bold text-white my-5">
        <h2>This is Sign In Page</h2>
      </div>

      <div className="w-[30%] mx-auto my-10">
        <div className="card bg-white w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                ref={emailRef}
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="px-2 py-0 cursor-pointer text-orange-500 bg-gray-700 absolute right-4 top-12 rounded-full"
              >
                {!showPassword ? "Show" : "Hide"}
              </div>
              <label className="label">
                <p onClick={handleForgetPass} className="label-text-alt link link-hover cursor-pointer">
                  Forgot password?
                </p>
              </label>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>

          <Link to={"/signup"}>
            <div className="form-control mb-5 mx-7">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </Link>

          {errorMessage && (
            <div>
              <p className="text-red-600 text-center">{errorMessage}</p>
            </div>
          )}

          {success && (
            <p className="text-green-500 text-center mb-2">
              Sign in is successful.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignIn;