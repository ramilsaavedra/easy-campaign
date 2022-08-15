import type { AppProps } from 'next/app';
import '../index.css';
import Header from '../layout/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
