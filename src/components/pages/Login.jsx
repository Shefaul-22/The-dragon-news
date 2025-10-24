import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {

    const [error, setError] = useState("")
    const [success, setSuccess] = useState("");
    const { signIn } = use(AuthContext)

    const location = useLocation();
    // console.log(location);
    const navigate = useNavigate();

    const handleLogIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)

        signIn(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                //  setSuccess("Login successfully");

                navigate(`${location.state ? location.state : "/"}`)

            })
            .catch(error => {
                const errorCode = error.code;
                // const errorMessage = error.message;
                // alert(errorMessage, errorCode)
                setError("Wrong Password! Enter correct password");
            })

    }
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">

                <h2 className='font-semibold text-2xl text-center'>Login on Your Account</h2>
                <form onSubmit={handleLogIn} className="card-body">
                    <fieldset className="fieldset">
                        {/* Email */}
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" required />
                        {/* Password */}
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" required />
                        <div><a className="link link-hover">Forgot password?</a></div>

                        {
                            error && <p className='text-red-400'>{error}</p>
                        }

                        {
                            success && <p className='text-green-500'>{success}</p>
                        }
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                        <p className='font-bold text-center pt-4'>Don’t Have An Account ? <Link to='/auth/register' className='text-secondary'>Register</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;