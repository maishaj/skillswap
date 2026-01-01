import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, user, setUser, signInWithGoogle, update } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    if (!passwordPattern.test(password)) {
      setError(
        "Password must contain at least one Uppercase letter, at least one Lowercase letter and password length must be at least 6 character "
      );
      return;
    } else {
      setError("");
    }

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        update({
          displayName: name,
          photoURL: photo,
        }).then(() => {
          setUser({ ...user, displayName: name, photoURL: photo });
          navigate("/");
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setUser(user);
      });

    e.target.reset();
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((res) => {
        const user = res.user;
        navigate(`${location.state ? location.state : "/"}`);
        toast.success("Logged in successfully!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
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

            {error && <p className="font-bold text-secondary">{error}</p>}

            <button className="btn btn-neutral mt-4 w-2/3 mx-auto">
              Register
            </button>
          </form>
          <button
            onClick={handleGoogleLogin}
            className="btn btn-neutral mt-4 w-2/3 mx-auto"
          >
            <FcGoogle />
            Login with Google
          </button>
          <p className="font-semibold text-center">
            Already have an account?{" "}
            <Link to="/auth/login" className="text-secondary text-center">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
