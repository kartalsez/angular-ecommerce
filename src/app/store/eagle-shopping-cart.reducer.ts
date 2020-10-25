import { Action, createReducer, on } from '@ngrx/store';
import { deleteCartItem, setShoppingCart } from './eagle-shopping-cart.actions';

export interface DnextShoppingCartState {
  shoppingCartObj: any;
}

export const initialState: DnextShoppingCartState = {
  shoppingCartObj: null
};

const dnextShoppinCartReducer = createReducer(
  initialState,
  on(setShoppingCart, (state: DnextShoppingCartState, { shoppingCart }) => {
    return {...state, shoppingCartObj: shoppingCart};
  }),
  on(deleteCartItem, (state: DnextShoppingCartState, { index }) => {
    const shoppingCart = JSON.parse(JSON.stringify(state.shoppingCartObj));
    shoppingCart.cartItems.splice(index, 1);
    return {...state, shoppingCartObj: shoppingCart};
  }),
);

export function reducer(state: DnextShoppingCartState | undefined, action: Action): DnextShoppingCartState {
  return dnextShoppinCartReducer(state, action);
}
