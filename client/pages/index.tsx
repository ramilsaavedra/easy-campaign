import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Easy Campaign</title>
        <meta
          name='description'
          content='Handle your email campaign easy as ABC'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='custom-container mx-auto mt-24'>
        <div>
          <h1 className='text-6xl'>Easy Campaign</h1>
        </div>
      </main>
    </div>
  );
};

export default Home;
