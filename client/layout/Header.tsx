import React from 'react';
import Link from 'next/link';
import useUser from '../lib/user/use-user';

const Header: React.FC = () => {
  const { user, loading, loggedOut, mutate } = useUser();
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
        {user && user.data ? (
          <ul className='flex-1 flex items-center justify-end gap-6'>
            <li className='font-semibold transition-all ease-in-out duration-200 hover:text-blue-700 cursor-pointer'>
              <a href='/api/logout'>Logout</a>
            </li>
          </ul>
        ) : (
          <ul className='flex-1 flex items-center justify-end gap-6'>
            <li className='custom-primary-button'>
              <Link href='/login'>Get Started</Link>
            </li>
            {/* <li className='custom-primary-button'>
                  <Link href='/sigin'>Sign Up</Link>
                </li> */}
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
