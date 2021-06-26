import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { Provider } from 'react-redux';
import { appWithTranslation } from 'next-i18next';

import { store } from 'src/Redux';
import 'src/Styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider storageKey='next-theme' attribute='class'>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
}
export default appWithTranslation(MyApp);
