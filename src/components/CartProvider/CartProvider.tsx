'use client';

import * as React from 'react';
import { produce } from 'immer';
import { IProduct } from '@/components/ProductCard';

export enum CART_ITEM_ACTIONS {
  ADD_ITEM = 'add-item',
  DELETE_ITEM = 'delete-item',
  DECREASE_ITEM_QUANTITY = 'decrease-item-quantity',
  INITIALIZE_ITEMS = 'initialize-items',
  RESET_ITEMS = 'reset-items',
}

export interface Item {
  product: IProduct;
  quantity: number;
}

type ItemAction =
  | {
      type: CART_ITEM_ACTIONS.ADD_ITEM;
      item: IProduct;
    }
  | {
      type: CART_ITEM_ACTIONS.DELETE_ITEM;
      item: Item;
    }
  | {
      type: CART_ITEM_ACTIONS.DECREASE_ITEM_QUANTITY;
      item: Item;
    }
  | {
      type: CART_ITEM_ACTIONS.INITIALIZE_ITEMS;
      initialItems: Item[];
    }
  | {
      type: CART_ITEM_ACTIONS.RESET_ITEMS;
    };

type CartItemsState = Item[];

const CartItemsContext = React.createContext<CartItemsState | null>(null);
// ToDo: fixme
// @ts-ignore
const CartActionsContext = React.createContext<React.Dispatch<ItemAction>>();
function CartProvider({ children }: { children: React.ReactNode }) {
  // @ts-ignore
  const [items, dispatch] = React.useReducer(
    cartItemsReducer,
    [],
    initializeItems
  );

  const memoizedItems = React.useMemo(() => items, [items]);
  const memoizedDispatch = React.useMemo(() => dispatch, [dispatch]);

  React.useEffect(() => {
    const currentItems = window.localStorage.getItem('items');

    if (currentItems) {
      dispatch({
        type: CART_ITEM_ACTIONS.INITIALIZE_ITEMS,
        initialItems: JSON.parse(currentItems),
      });
    }
  }, []);

  React.useEffect(() => {
    const initialState = initializeItems();
    if (items !== initialState) {
      window.localStorage.setItem('items', JSON.stringify(items));
    }
  }, [items]);

  return (
    <CartItemsContext.Provider value={memoizedItems}>
      <CartActionsContext.Provider value={memoizedDispatch}>
        {children}
      </CartActionsContext.Provider>
    </CartItemsContext.Provider>
  );
}

function cartItemsReducer(
  state: CartItemsState,
  action: ItemAction
): CartItemsState {
  return produce(state, (draftState) => {
    switch (action.type) {
      case CART_ITEM_ACTIONS.INITIALIZE_ITEMS: {
        return action.initialItems;
      }

      case CART_ITEM_ACTIONS.RESET_ITEMS: {
        return [];
      }

      case CART_ITEM_ACTIONS.ADD_ITEM: {
        const itemIndex = state.findIndex(
          (item) => item.product.id === action.item.id
        );

        if (itemIndex !== -1) {
          draftState[itemIndex].quantity += 1;
          return;
        }

        draftState.push({
          product: { ...action.item },
          quantity: 1,
        });
        return;
      }

      case CART_ITEM_ACTIONS.DELETE_ITEM: {
        const itemIndex = state.findIndex(
          (item) => item.product.id === action.item.product.id
        );

        draftState.splice(itemIndex, 1);
        return;
      }

      case CART_ITEM_ACTIONS.DECREASE_ITEM_QUANTITY: {
        const itemIndex = state.findIndex(
          (item) => item.product.id === action.item.product.id
        );

        if (state[itemIndex].quantity === 1) {
          return;
        }

        draftState[itemIndex].quantity -= 1;
        return;
      }
    }
  });
}

function initializeItems() {
  const currentItems =
    typeof window !== 'undefined' ? window.localStorage.getItem('items') : null;
  return currentItems ? JSON.parse(currentItems) : [];
}
export function useCartItems() {
  return React.useContext(CartItemsContext);
}

export function useCartItemActions() {
  return React.useContext(CartActionsContext);
}
export default React.memo(CartProvider);
