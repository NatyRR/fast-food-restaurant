// main tools
import { createContext } from 'react';

// types
import { Toast } from 'primereact/toast';

type AppContextType = {
  toast: () => Toast | undefined;
};

export const AppContext = createContext<AppContextType>({
  toast: () => undefined,
});
