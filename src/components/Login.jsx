import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {

    const {signIn}=use(AuthContext);
    const location=useLocation();
    const navigate=useNavigate();

    const handleLogin=(e)=>{

        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;

        e.target.reset();

        signIn(email,password)
        .then((res)=>{
            const user=res.user;
            navigate(`${location.state?location.state:"/"}`);
            toast.success("Logged in successfully!");
        })
        .catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(errorMessage);
        });

    }

    return (
        <div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto m-20">
                <h1 className="font-bold text-2xl text-center p-2">Login</h1>
                <div className="card-body">
                    <form onSubmit={handleLogin} className="fieldset">
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" required />

                        <label className="label">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" required />
                        
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