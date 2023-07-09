// main tools
import type { AppProps } from 'next/app';

// provider
import { AppContextProvider } from '@/context/app/provider';

// styles
import '@/styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <Component {...pageProps} />;
    </AppContextProvider>
  );
}
