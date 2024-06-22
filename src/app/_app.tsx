import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { wrapper } from '../store';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(MyApp);
