import Layout from '../components/Layout';
import '../styles/globals.css';
import Head from 'next/head';
import { Provider } from 'react-redux';

import { store } from '../redux/store';

import { Provider as AuthProvider } from 'next-auth/client';

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Marketplace</title>
      </Head>
      <AuthProvider session={pageProps.session}>
        {/* <Provider store={store}> */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
        {/* </Provider> */}
      </AuthProvider>
    </div>
  );
}

export default MyApp;
