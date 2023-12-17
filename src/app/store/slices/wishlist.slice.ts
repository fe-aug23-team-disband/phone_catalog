import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../index";
import {WishlistState} from "./types/wishlist.state";
import {Product, ProductShorted} from "../../../types/Product";
import saveToStorage from "../utils/saveToStorage";
import getInitialState from "../utils/getInitialState";

export const wishlist = createSlice({
  name: "wishlist",
  initialState: getInitialState<WishlistState>(
    "wishlist",
    { items: [] }
  ),
  reducers: {
    add: (state, action: PayloadAction<{ item: Product | ProductShorted }>) => {
      const { item } = action.payload;

      state.items.push(item);
      saveToStorage(wishlist.name, state);
    },
    remove: (state, action: PayloadAction<{ id: string }>) => {
      state.items = state.items.filter((item) => {
        return item.id !== action.payload.id;
      });

      saveToStorage(wishlist.name, state);
    },
  },
});

export const wishlistSelector = (state: RootState) => state.wishlist;
export const { add, remove } = wishlist.actions;

export default wishlist.reducer;
