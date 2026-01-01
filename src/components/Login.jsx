import React, { use, useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { IoMdEyeOff } from "react-icons/io";
import { FaEye } from "react-icons/fa";

const Login = () => {
  const { signIn, signInWithGoogle } = use(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    e.target.reset();

    signIn(email, password)
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
        <h1 className="font-bold text-2xl text-center p-2">Login</h1>
        <div className="card-body">
          <form onSubmit={handleLogin} className="fieldset">
            <label className="label">Email</label>
            <input
              ref={emailRef}
              name="email"
              type="email"
              className="input w-5/6"
              placeholder="Email"
              required
            />

            <label className="label">Password</label>
            <div className="flex items-center gap-2">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                className="input flex-1"
                placeholder="Password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="btn bg-white border-0 text-xl"
              >
                {showPassword ? <FaEye /> : <IoMdEyeOff />}
              </button>
            </div>

            <div>
              <button
                type="button"
                onClick={() =>
                  navigate("/forgot-password", {
                    state: { email: emailRef.current?.value || "" },
                  })
                }
                className="link link-hover"
              >
                Forgot password?
              </button>
            </div>
            <button className="btn btn-neutral mt-4 w-2/3 mx-auto">
              Login
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
            Don't have an account?{" "}
            <Link to="/auth/register" className="text-secondary text-center">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
