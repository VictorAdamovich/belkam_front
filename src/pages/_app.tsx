import React from 'react';

import { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import { SWRConfig } from 'swr';

import Footer from '@containers/Layout/Footer';
import Header from '@containers/Layout/Header';
import { ModalProvider } from '@contexts/modals.context';

import '@assets/scss/global.scss';
import 'react-toastify/dist/ReactToastify.css';
import 'semantic-ui-css/semantic.min.css';

const MyApp = ({ Component, pageProps }: AppProps) => {

  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
      }}
    >
      <ModalProvider>
        <Header />
        <Component {...pageProps} />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Footer />
      </ModalProvider>
    </SWRConfig>
  );
};

export default MyApp;
