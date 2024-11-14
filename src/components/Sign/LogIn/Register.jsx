import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import auth from "../../Firebase/FirebaseG";

const Register = () => {
  const [errorMassage, setErrorMassage] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleCreate = (event) => {
    event.preventDefault();

    const name = event.target.elements.name.value;
    const photo = event.target.elements.photo.value;
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    const terms = event.target.elements.terms.checked;

    console.log(name, photo, email, password, terms);

    // reset error and status
    setErrorMassage("");
    setSuccess(false, true);


    if(!terms){
      setErrorMassage('Please Accept our terms and condition.')
      return;
    }

    if (password.length < 6) {
      setErrorMassage("Password should be 6 character or longer");
      return;
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!passwordRegex.test(password)) {
      setErrorMassage(
        "At least one uppercase, one lowercase, one number, one special character"
      );
      return;
    }

    // Create user with emaol and password

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess(true);

        // send verification email
        sendEmailVerification(auth.currentUser)
          .then(() => {
            console.log("verification email address");
          })

          // update profile info(name , photo)

          const profile ={
            displayName: name ,
            photoURL : photo
          }
          updateProfile(auth.currentUser, profile)
           .then(() => {
            console.log("Update profile ");
           })
           .catch(error => console.log("Error profile", error))

      })
      .catch((error) => {
        console.log("Error", error.message);
        setErrorMassage(error.message);
        setSuccess(false);
      });
  };

 

  return (
    <div>
      <div className="text-center text-2xl font-bold text-white">
        <h2>This is Register Page</h2>
      </div>

      <div className="w-[30%] mx-auto my-10">
        <div className="card bg-white w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleCreate}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name" // Add name attribute here
                placeholder="Your Namer"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo url</span>
              </label>
              <input
                type="text"
                name="photo" // Add name attribute here
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email" // Add name attribute here
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label ">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password" // Add name attribute here for password if needed
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
                <Link
                  to={"/register"}
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </Link>
              </label>
              {/* Check box */}
              <div className="form-control">
                <label className="label cursor-pointer justify-start">
                  <input
                    type="checkbox" name="terms"
                    className="checkbox checkbox-primary"
                  />
                  <span className="label-text text-gray-600 ml-2">Accept our terms and condition.</span>
                </label>
              </div>
              {/* Check box */}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Create Account</button>
            </div>
            <Link to={"/login"}>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Log in</button>
              </div>
            </Link>
          </form>

          {errorMassage && (
            <p className="text-red-600 text-center mb-2">{errorMassage}</p>
          )}
          {/* Successful message */}

          {/* if  account is create then show */}
          {success && (
            <p className="text-green-500 text-center mb-2">
              Sign up is Successful.
            </p>
          )}
          {/* if account is not create then show */}
          {/* {
            success || <p className="text-orange-500 text-center mb-2">Sign up is unsuccessful.</p>
          } */}
        </div>
      </div>
    </div>
  );
};

export default Register;
