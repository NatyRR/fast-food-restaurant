// main tools
import { createContext } from 'react';

// type
import { Socket } from 'socket.io-client';

type SocketContextProps = {
  socket: Socket<any, any> | undefined;
};

export const SocketContext = createContext<SocketContextProps>({
  socket: {} as Socket<any, any> | undefined,
});
