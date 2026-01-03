import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import "animate.css";

const ToyNavbar = () => {
  const { user, logout } = use(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((error) => {
        alert(error);
      });
  };
  console.log(user);

  return (
    <div className="">
      <div className="navbar bg-base-100 shadow-sm flex justify-between">
        <div className="mr-5 md:mr-140 lg:mr-140">
          <a className="animate__animated animate__bounce btn btn-ghost text-xl">
            SkillSwap
          </a>
        </div>

        <div className="navbar-center lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">My Profile</Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end space-x-2">
          <div className="tooltip tooltip-bottom" data-tip={user? user.displayName: "Guest User"}>
            <img 
            className="w-10 h-10 rounded-full"
            src={`${
              user
                ? user.photoURL
                : "https://img.icons8.com/?size=100&id=7819&format=png"
            }`}
            alt=""
          />
          </div>
          {user ? (
            <button onClick={handleLogout} className="btn">
              Logout
            </button>
          ) : (
            <div className="flex gap-2">
            <Link to="/auth/login" className="btn">
              Login
            </Link>
            <Link to="/auth/register" className="hidden md:inline-block  lg:inline-block btn pt-2">
              Signup
            </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ToyNavbar;
