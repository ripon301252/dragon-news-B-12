import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userImg from '../assets/user.png'
import { AuthContext } from '../Router/ContextAuthProvider';

const Navbar = () => {
    const {user, logOut} = use(AuthContext)
    // console.log(user)

    const handleLogOut = () =>{
        // console.log('logout')
        logOut()
            .then(()=>{
                alert('Your Logged Out Successfully')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className='flex justify-between md:flex-row flex-col items-center md:pt-10'>
            <div className=''>
                {user && user.email}
            </div>
            <div className='nav flex items-center text-base text-accent gap-5 md:my-0 my-5'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/career'}>Career</NavLink>
            </div>
            <div className='login-btn flex items-center gap-2'>
                <img src={`${user ? user.photoURL : userImg}`} alt={userImg} className='w-20 rounded-full' />
                {user ? (
                    <button onClick={handleLogOut} className='btn btn-primary px-8'>LogOut</button>
                    ) : (
                    <Link to={`/auth/login`} className='btn btn-primary px-8'>Login</Link>
                )}
                
            </div>
        </div>
    );
};

export default Navbar;