// main tools
import type { AppProps } from 'next/app';

// providers

import { AppContextProvider } from '@/context/app/provider';
import { SessionProvider } from 'next-auth/react';

// styles
import '@/styles/globals.scss';
import { NextPage } from 'next';
import { Session } from 'next-auth';

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
