import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Product, ProductShorted} from "../../../types/Product";
import {RootState} from "../index";
import {CartState} from "./types/cart.state";
import getInitialState from "../utils/getInitialState";
import saveToStorage from "../utils/saveToStorage";
import OrderClient from "../../api/ordersClient";
import {ActionState} from "../../../types/ActionState";

export const createOrder = createAsyncThunk(
  "cart/createOrder",
  async (cart: CartState) => {
    const products = cart.items.map(({ item, count }) => {
      return {
        id: item.id,
        count,
      };
    });

    try {
      const order = await OrderClient.createOrder({
        products,
        user_id: "924d1d37-f338-4865-988d-266dff0f3c1d"
      }) as { id: string, owner_id: string };
      return order.id;
    } catch (e) {
      console.log(e);
      return Promise.reject("");
    }
  }
);

export const cart = createSlice({
  name: "cart",
  initialState: getInitialState<CartState>(
    "cart",
    { items: [], sum: 0, order: { id: null, status: ActionState.Idle } }
  ),
  reducers: {
    add: (state, action: PayloadAction<{ item?: Product | ProductShorted, id?: string }>) => {
      const { item, id } = action.payload;

      if (item) {
        state.items.push({ item, count: 1 });
        state.sum += item.priceDiscount
          ? item.priceDiscount
          : item.priceRegular;

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
        state.items = state.items.filter(({ item }) => item.id !== position.item.id);
        state.sum -= position.item.priceDiscount
          ? position.item.priceDiscount
          : position.item.priceRegular;
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
  extraReducers: (builder) => {
    builder.addCase(createOrder.pending, (state) => {
      state.order.status = ActionState.Loading;
    });
    builder.addCase(createOrder.rejected, (state) => {
      state.order.status = ActionState.Failed;
    });
    builder.addCase(createOrder.fulfilled, (state, action: PayloadAction<string>) => {
      state.order.status = ActionState.Idle;
      state.order.id = action.payload;
      state.sum = 0;
      state.items = [];
    });
  }
});

export const cartSelector = (state: RootState) => state.cart;
export const { add, remove, removeAll } = cart.actions;

export default cart.reducer;
