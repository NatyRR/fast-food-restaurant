// main tools
import { createContext } from 'react';

// types
import { ShoppingCartDataType } from '@/types/shoppingCart';

type ShoppingContextType = {
  handleShow: () => void;
  shoppingCartState: ShoppingCartDataType;
};

export const ShoppingContext = createContext<ShoppingContextType>({
  handleShow: () => {},
  shoppingCartState: {
    amount: 0,
    items: [],
  },
});
