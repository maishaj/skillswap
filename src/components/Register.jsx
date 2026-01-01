import React from "react";
import { Link } from "react-router";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    e.target.reset();
    const form=e.target;
    const name=e.target.name.value;
  };

  return (
    <div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto m-20">
        <h1 className="font-bold text-2xl text-center p-2">Register Now</h1>
        <div className="card-body">
          <form className="fieldset">
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
              name=""
              className="input"
              placeholder="Photo URL"
              required
            />

            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              required
            />

            <button onClick={handleRegister} className="btn btn-neutral mt-4">
              Register
            </button>
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
