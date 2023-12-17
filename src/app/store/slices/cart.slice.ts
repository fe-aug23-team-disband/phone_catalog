import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import getInitialState from "../utils/getInitialState";
import {Product, ProductShorted} from "../../../types/Product";
import saveToStorage from "../utils/saveToStorage";
import {RootState} from "../index";
import {CartState} from "./types/cart.state";

export const cart = createSlice({
  name: "cart",
  initialState: getInitialState<CartState>(
    "cart",
    { items: [], sum: 0 }
  ),
  reducers: {
    add: (state, action: PayloadAction<{ item?: Product | ProductShorted, id?: string }>) => {
      const { item, id } = action.payload;

      if (item) {
        state.items.push({ item, count: 1 });
        saveToStorage(cart.name, state);

        return;
      }

      if (id) {
        const position = state.items.find(({ item }) => item.id === action.payload.id);

        if (position) {
          position.count += 1;
          state.sum += position.item.priceDiscount
            ? position.item.priceDiscount
            : position.item.priceRegular;
        }

        saveToStorage(cart.name, state);
        return;
      }
    },
    remove: (state, action: PayloadAction<{ id: string }>) => {
      const position = state.items.find(({ item }) => item.id === action.payload.id);

      if (position && position.count <= 1) {
        state.items = state.items.filter(({ item }) => item.id === position.item.id);
      } else if (position) {
        position.count -= 1;
        state.sum -= position.item.priceDiscount
          ? position.item.priceDiscount
          : position.item.priceRegular;
      }

      saveToStorage(cart.name, state);
    },
    removeAll: (state, action: PayloadAction<{ id: string }>) => {
      state.items = state.items.filter(({item, count}) => {
        if (item.id === action.payload.id) {
          state.sum -= item.priceDiscount
            ? count * item.priceDiscount
            : count * item.priceRegular;

          return false;
        }
        return true;
      });

      saveToStorage(cart.name, state);
    },
  },
});

export const cartSelector = (state: RootState) => state.cart;
export const { add, remove, removeAll } = cart.actions;

export default cart.reducer;
