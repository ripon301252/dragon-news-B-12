import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='py-8'>
            <img src={logo} alt={logo} className='mx-auto w-[400px]' />
            <p className='text-sm text-center text-accent my-3'>Journalism Without Fear or Favour</p>
            <p className='text-center font-semibold text-accent'>{format(new Date(),'EEEE, MMMM, MM, 	yyyy' )}</p>
        </div>
    );
};

export default Header; 