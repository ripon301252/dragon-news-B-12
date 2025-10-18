import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='py-8'>
            <img src={logo} alt={logo} className='mx-auto md:w-[400px] w-[280px]' />
            <p className='md:text-sm text-xs text-center text-accent my-3'>Journalism Without Fear or Favour</p>
            <p className='text-center md:text-sm text-xs font-semibold text-accent'>{format(new Date(),'EEEE, dd, MMMM-MM, yyyy' )}</p>
        </div>
    );
};

export default Header; 