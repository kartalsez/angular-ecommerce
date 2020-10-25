import { createAction, props } from '@ngrx/store';

export const fetchShoppingCart = createAction('[ShoppingCart] FetchShoppinCart', props<{customerId: string}>());

export const setShoppingCart = createAction('[ShoppingCart] SetShoppinCart', props<{shoppingCart: any}>());

export const deleteCartItem = createAction('[ShoppingCart] DeleteCartItem', props<{index: number}>());

