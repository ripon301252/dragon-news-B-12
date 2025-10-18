import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className=" flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-2xl font-bold text-center mb-3">Login your account</h1>
          <fieldset className="fieldset">
            {/* Email */}
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            {/* Password */}
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />

            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            <button className="btn btn-neutral mt-4">Login</button>
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
        </div>
      </div>
    </div>
  );
};

export default Login;
