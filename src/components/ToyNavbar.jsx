import React from 'react';
import { Link } from 'react-router';

const ToyNavbar = () => {
    return (
           <div className=''>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><Link to="/">Home</Link></li>
                        <li><Link>My Profile</Link></li>
                    </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">SkillSwap</a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li><Link>My Profile</Link></li>
                    </ul>
                </div>

                <div className="navbar-end space-x-2">
                    <img className='w-10 h-10' src="https://img.icons8.com/?size=100&id=7819&format=png" alt="" />
                    <Link to="/auth/login" className='btn'>Login</Link>
                </div>
            </div>
        </div>
    );
};

export default ToyNavbar;