import React from 'react';

import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className='bg-gray-100 mt-auto'>
      <div className='custom-container mx-auto text-gray-400'>
        {/* <div className='flex items-center'>
          <img
            className='mr-3 h-[50px]'
            alt='EasyCampaign'
            src='./image/easy-campaign.png'
          />
          <h1 className='text-lg font-extrabold'>EasyCampaign</h1>
        </div>
        <hr className='my-5' /> */}
        <div className='text-center py-2'>
          Copyright &copy; {new Date().getFullYear()}{' '}
          <a
            href='https://github.com/ramilsaavedra/easy-campaign'
            target='_blank'
            rel='noreferrer'
          >
            Ramil Saavedra
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
