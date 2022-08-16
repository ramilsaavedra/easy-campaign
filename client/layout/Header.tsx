import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className='border border-gray-200 top-0 bg-opacity-70 absolute w-screen bg-white'>
      <div className='custom-container mx-auto flex items-center '>
        <img
          className='mr-3 h-[50px]'
          alt='EasyCampaign'
          src='./image/easy-campaign.png'
        />
        <Link href='/'>
          <h1 className='text-lg text-gray-800 font-extrabold cursor-pointer'>
            EasyCampaign
          </h1>
        </Link>
        <ul className='flex-1 flex items-center justify-end gap-6'>
          <li className='font-semibold transition-all ease-in-out duration-300 hover:text-blue-700'>
            <Link href='/login'>Log In</Link>
          </li>
          <li className='custom-primary-button'>
            <Link href='/sigin'>Sign Up</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
