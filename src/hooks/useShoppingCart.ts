import { ShoppingContext } from '@/context/shopping/context';
import { useContext } from 'react';

export const useShoppingCart = () => useContext(ShoppingContext);
