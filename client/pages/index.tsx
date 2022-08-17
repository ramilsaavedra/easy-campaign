import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Easy Campaign</title>
      </Head>
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
            <li>
              <Link href='/login'>
                <div className='custom-primary-button'>Dashboard</div>
              </Link>
            </li>
            {/* <li className='custom-primary-button'>
            <Link href='/sigin'>Sign Up</Link>
          </li> */}
          </ul>
        </div>
      </header>

      <main className='custom-container mx-auto mt-24'>
        <div>
          <h1 className=''>Landing Page</h1>
        </div>
      </main>
    </>
  );
};

export default Home;
