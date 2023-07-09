// types
import { ItemDataType, ShoppingCartDataType } from '@/types/shoppingCart';

export const shoppingCartActions = {
  addToCart: (state: ShoppingCartDataType, payload: { item: ItemDataType }) => {
    const { item } = payload;
    state.items.push(item);
    return state;
  },

  addQuantityToItem: (
    state: ShoppingCartDataType,
    payload: { item: ItemDataType }
  ) => {
    const { item } = payload;
    const itemIndex = state.items.findIndex((i) => i.name === item.name);
    state.items[itemIndex].quantity = item.quantity++;
    return state;
  },

  removeQuantityToItem: (
    state: ShoppingCartDataType,
    payload: { item: ItemDataType }
  ) => {
    const { item } = payload;
    const itemIndex = state.items.findIndex((i) => i.name === item.name);
    state.items[itemIndex].quantity = item.quantity--;
    return state;
  },

  removeFromCart: (
    state: ShoppingCartDataType,
    payload: { item: ItemDataType }
  ) => {
    const { item } = payload;
    const itemIndex = state.items.findIndex((i) => i.name === item.name);
    state.items.splice(itemIndex, 1);
    return state;
  },

  updateAmount: (state: ShoppingCartDataType, payload?: number) => {
    if (payload) {
      state.amount = state.amount + payload;
      return state;
    }

    const amount = state.items.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    state.amount = amount;
    return state;
  },
};
