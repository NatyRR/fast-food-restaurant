// types
import { ItemDataType, ShoppingCartDataType } from '@/types/shoppingCart';

export const shoppingCartActions = {
  addToCart: (state: ShoppingCartDataType, payload: { item: ItemDataType }) => {
    const { item } = payload;
    const newState = { ...state, items: [...state.items] };
    newState.items.push(item);
    return newState;
  },

  addQuantityToItem: (
    state: ShoppingCartDataType,
    payload: { itemName: string }
  ) => {
    const { itemName } = payload;
    const newState = { ...state, items: [...state.items] };
    const itemIndex = newState.items.findIndex((i) => i.name === itemName);
    newState.items[itemIndex] = {
      ...newState.items[itemIndex],
      quantity: newState.items[itemIndex].quantity + 1,
    };
    return newState;
  },

  removeQuantityToItem: (
    state: ShoppingCartDataType,
    payload: { itemName: string }
  ) => {
    const { itemName } = payload;
    const newState = { ...state, items: [...state.items] };
    const itemIndex = newState.items.findIndex((i) => i.name === itemName);
    newState.items[itemIndex] = {
      ...newState.items[itemIndex],
      quantity: newState.items[itemIndex].quantity - 1,
    };
    return newState;
  },

  removeFromCart: (
    state: ShoppingCartDataType,
    payload: { itemName: string }
  ) => {
    const { itemName } = payload;
    const newState = { ...state, items: [...state.items] };
    const itemIndex = newState.items.findIndex((i) => i.name === itemName);
    newState.items.splice(itemIndex, 1);
    return newState;
  },

  updateAmount: (state: ShoppingCartDataType, payload?: number | null) => {
    const newState = { ...state, items: [...state.items] };

    if (payload) {
      newState.amount = newState.amount + payload;
      return newState;
    }

    const amount = newState.items.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);

    newState.amount = amount;
    return newState;
  },
};
