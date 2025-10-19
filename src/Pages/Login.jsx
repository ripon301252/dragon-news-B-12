import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Router/ContextAuthProvider";

const Login = () => {
  const [error, setError] = useState('')
  const {signIn} = use(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()
  console.log(location)

  const handleLogin = (e) => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log({email, password})
    signIn(email, password)
      .then((result)=>{
        const user = result.user;
        console.log(user)
        navigate(`${location.state ? location.state : '/'}`)
      })
      .catch(err => {
        const errorCode = err.code;
        // const errorMessage = err.message;
        // alert(errorCode, errorMessage)
        setError(errorCode)
      })
  }

  return (
    <div className=" flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleLogin} className="card-body">
          <h1 className="text-2xl font-bold text-center mb-3">Login your account</h1>
          <fieldset className="fieldset">
            {/* Email */}
            <label className="label">Email</label>
            <input type="email" name="email" className="input" placeholder="Email" required />
            {/* Password */}
            <label className="label">Password</label>
            <input type="password" name="password" className="input" placeholder="Password" required />

            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            <button type="submit" className="btn btn-neutral mt-4">Login</button>
            <p className="text-accent text-center font-semibold mt-3">
              Don't Have An Account ? please{" "}
              <Link
                to={`/auth/register`}
                className="text-blue-500 underline text-[13px]"
              >
                Register
              </Link>
            </p>
          </fieldset>
        {error && <p className="text-red-500 text-xs text-center font-semibold">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
