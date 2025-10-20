import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center pt-5'>
            <img  className='w-[400px]' src={logo} alt="The dragon news logo" />
            <p className='text-accent py-3'>Journalism Without Fear or Favour</p>
            
            <p className='text-accent'>{format(new Date(), `EEEE, MMMM MM, yyyy`)}</p>
        </div>
    );
};

export default Header;