import { io } from 'socket.io-client';
import { SocketContext } from './context';
// context

// types
import { FC, ReactNode } from 'react';
import { getSession } from 'next-auth/react';

type SocketContextProviderProps = {
  children: ReactNode;
};

export const SocketContextProvider: FC<SocketContextProviderProps> = ({
  children,
}) => {
  const context = { socket: getSocket() };

  function getSocket() {
    let socket;
    if (!socket) {
      socket = io('https://fast-food-api-production.up.railway.app');
    }
    return socket;
  }

  return (
    <SocketContext.Provider value={context}>{children}</SocketContext.Provider>
  );
};
