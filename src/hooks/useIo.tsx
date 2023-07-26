import { SocketContext } from '@/context/io/context';
import { useContext } from 'react';

export const useIo = () => useContext(SocketContext);
