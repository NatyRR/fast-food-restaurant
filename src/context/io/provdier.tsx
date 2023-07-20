import { io } from 'socket.io-client';
import { SocketContext } from './context';
// context

// types
import { FC, ReactNode } from 'react';
import { getSession } from 'next-auth/react';

type SocketContextProviderProps = {
  token: string;
  children: ReactNode;
};

export const SocketContextProvider: FC<SocketContextProviderProps> = ({
  token,
  children,
}) => {
  const context = { socket: getSocket(token) };

  function getSocket(token: string) {
    let socket;

    if (!socket) {
      console.log(process.env.NEXT_PUBLIC_API_URL, token);
      socket = io(process.env.NEXT_PUBLIC_API_URL!, {
        extraHeaders: {
          authorization: `${token}`,
        },
      });
    }

    return socket;
  }

  return (
    <SocketContext.Provider value={context}>{children}</SocketContext.Provider>
  );
};
