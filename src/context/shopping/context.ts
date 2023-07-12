// main tools
import { Dispatch, createContext } from 'react';

// types
import { ShoppingCartDataType } from '@/types/shoppingCart';

type ShoppingContextType = {
  handleShow: () => void;
  handleShowForm: () => void;
  shoppingCartState: ShoppingCartDataType;
  dispatch: Dispatch<{ type: string; payload: any }>;
};

export const ShoppingContext = createContext<ShoppingContextType>({
  dispatch: () => {},
  handleShow: () => {},
  handleShowForm: () => {},
  shoppingCartState: {
    amount: 0,
    items: [],
  },
});
