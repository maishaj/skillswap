import React, { use, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createUser, user, setUser} = use(AuthContext);
  const [error,setError]=useState("");

  const handleRegister = (e) => {

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    
    if(!passwordPattern.test(password))
    {
        setError("Password must contain at least one Uppercase letter, at least one Lowercase letter and password length must be at least 6 character ");
        return;
    }
    else
    {
        setError("");
    }

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

    e.target.reset();
  };

  return (
    <div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto m-20">
        <h1 className="font-bold text-2xl text-center p-2">Register Now</h1>
        <div className="card-body">
          <form onSubmit={handleRegister} className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Your name"
              required
            />

            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              required
            />

            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="input"
              placeholder="Photo URL"
              required
            />

            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
              required
            />
            
            {
                error && <p className='font-bold text-secondary'>{error}</p>
            }

            <button className="btn btn-neutral mt-4">Register</button>
            <p className="font-semibold text-center">
              Already have an account?{" "}
              <Link to="/auth/login" className="text-secondary text-center">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
