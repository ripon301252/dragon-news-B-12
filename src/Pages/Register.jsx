import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div>
      <div className=" flex justify-center min-h-screen items-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-2xl font-bold text-center mb-3">Register your account</h1>
            <fieldset className="fieldset">
              {/* Name */}
              <label className="label">Name</label>
              <input type="text" className="input" placeholder="Name" />
              {/* photo url */}
              <label className="label">Photo URL</label>
              <input type="" className="input" placeholder="Photo URL" />
              {/* Email */}
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
               {/* Password */}
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />

              <button className="btn btn-neutral mt-4">Register</button>
              <p className="text-accent text-center font-semibold mt-3">
                Already Have An Account ? please{" "}
                <Link
                  to={`/auth/login`}
                  className="text-blue-500 underline text-[13px]"
                >
                  Login
                </Link>
              </p>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
