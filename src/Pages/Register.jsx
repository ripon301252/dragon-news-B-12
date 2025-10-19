import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Router/ContextAuthProvider";

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const [nameError, setNameError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.target);
    const form = e.target;
    const name = form.name.value;
    if (name.length < 3) {
      setNameError("Name should be more then 3 character ");
      return;
    } else {
      setNameError("");
    }
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log({name, photo, email, password})
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user)
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({...user, displayName: name, photoURL: photo});
            navigate('/')
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });
      })
      .catch((err) => {
        const errMessage = err.message;
        alert(errMessage);
      });
  };

  return (
    <div>
      <div className=" flex justify-center min-h-screen items-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <h1 className="text-2xl font-bold text-center mb-3">
              Register your account
            </h1>
            <fieldset className="fieldset">
              {/* Name */}
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Name"
                required
              />
              {nameError && <p className="text-xs text-red-500">{nameError}</p>}

              {/* photo url */}
              <label className="label">Photo URL</label>
              <input
                type="text"
                name="photo"
                className="input"
                placeholder="Photo URL"
                required
              />

              {/* Email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                required
              />

              {/* Password */}
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
                required
              />

              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
