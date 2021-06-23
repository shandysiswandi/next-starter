import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { Provider } from 'react-redux';
import { appWithTranslation } from 'next-i18next';

import { store } from 'store';
import nextI18NextConfig from 'i18next.config';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider storageKey='next-theme' attribute='class'>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </>
  );
}
export default appWithTranslation(MyApp, nextI18NextConfig);
