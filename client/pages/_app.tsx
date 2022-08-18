import type { AppProps } from 'next/app';
import '../index.css';
import Footer from '../layout/Footer';
import Header from '../layout/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Header /> */}
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
