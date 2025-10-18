import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold md:text-left text-center mb-5'>Login With</h2>
            <div className='space-y-3'>
                <button className='btn btn-outline btn-secondary w-full'><FcGoogle className='text-2xl' /> Login With Google</button>
                <button className='btn btn-outline btn-primary w-full'><FaGithub  className='text-2xl'/> Login With GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogin;