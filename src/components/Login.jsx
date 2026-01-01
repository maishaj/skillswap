import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto m-20">
                <h1 className="font-bold text-2xl text-center p-2">Login</h1>
                <div className="card-body">
                    <form className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />

                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />

                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                        <p className='font-semibold text-center'>Don't have an account? <Link to="/auth/register" className='text-secondary text-center'>Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;