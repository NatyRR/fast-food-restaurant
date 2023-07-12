// actions
import { shoppingCartActions } from './actions';

// cases
import { shoppingCartCases } from './case';

// types
import { ShoppingCartDataType } from '@/types/shoppingCart';

export type ShoppingCartPayload = any;

export const reducer = (
  state: ShoppingCartDataType,
  action: { type: string; payload: ShoppingCartPayload }
) => {
  const { type, payload } = action;

  switch (type) {
    case shoppingCartCases.ADD_TO_CART:
      return shoppingCartActions.addToCart(state, payload);
    case shoppingCartCases.ADD_QUANTITY_TO_ITEM:
      return shoppingCartActions.addQuantityToItem(state, payload);
    case shoppingCartCases.REMOVE_QUANTITY_TO_ITEM:
      return shoppingCartActions.removeQuantityToItem(state, payload);
    case shoppingCartCases.REMOVE_FROM_CART:
      return shoppingCartActions.removeFromCart(state, payload);
    case shoppingCartCases.UPDATE_AMOUNT:
      return shoppingCartActions.updateAmount(state, payload);
    default:
      return state;
  }
};
