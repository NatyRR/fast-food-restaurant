// main tools
import { useRef } from 'react';

// context
import { AppContext } from './context';

// prime react
import { Toast } from 'primereact/toast';

// types
import { FC, ReactNode } from 'react';

type AppContextProviderProps = {
  children: ReactNode;
};

export const AppContextProvider: FC<AppContextProviderProps> = ({
  children,
}) => {
  const toast = useRef<Toast>(null);

  const context = {
    toast: () => toast.current as Toast,
  };

  return (
    <AppContext.Provider value={context}>
      {children}
      <Toast ref={toast} position='top-right' />
    </AppContext.Provider>
  );
};
