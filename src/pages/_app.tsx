// main tools
import type { AppProps } from 'next/app';

// provider
import { AppContextProvider } from '@/context/app/provider';

// styles
import '@/styles/globals.scss';
import { NextPage } from 'next';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

type MyAppProps = {
  session: Session;
};

const App: NextPage<AppProps<MyAppProps>> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </SessionProvider>
  );
};

export default App;
