import React, { useEffect } from 'react';
import Router from 'next/router';
import Head from 'next/head';
import useUser from '../lib/user/use-user';
import Header from '../layout/Header';
const Dashboard: React.FC = () => {
  const { user, loading, loggedOut, mutate } = useUser();

  useEffect(() => {
    if (loggedOut) {
      Router.replace('/login');
    }
  }, [loggedOut]);

  if (loggedOut) return <h1>redirecting...'</h1>;
  return (
    <>
      <Head>
        <title>Easy Campaign | Dashboard</title>
      </Head>
      <Header />
      <main className='custom-container mx-auto mt-24'>
        <h1>Dashboard</h1>
      </main>
    </>
  );
};

export default Dashboard;
