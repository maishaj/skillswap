import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const ForgotPassword = () => {

  const { resetPassword } = useContext(AuthContext);
  const location = useLocation();
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (location?.state?.email)
    {
         setEmail(location.state.email);
    }
  }, [location]);

  const handleForgotPassword = (e) => 
    {
    e.preventDefault();
    const formEmail = email || e.target.email.value;
    if (!formEmail) {
      toast.error("Please provide your email");
      return;
    }
    resetPassword(formEmail)
      .then(() => {
        toast.success("Password reset email sent. Redirecting to Gmail...");
        setTimeout(() => {
          window.location.href = "https://mail.google.com";
        }, 800);
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.message || "Failed to send reset email");
      });
  };

  return (
    <div>
      <div className="card bg-base-200 w-full max-w-sm shrink-0 shadow-xl mx-auto m-20 rounded-lg p-4">
        <h1 className="font-bold text-2xl text-center p-2">Password Reset</h1>
        <div className="card-body">
          <form onSubmit={handleForgotPassword} className="fieldset">
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="btn btn-neutral mt-4 w-2/3 mx-auto">
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
