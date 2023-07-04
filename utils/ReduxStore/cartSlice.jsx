import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartItems",
  initialState: {
    items: [],
  },
  // In reducer functions it takes two argument initialSate and action
  reducers: {
    addItem: (state, action) => {
      const findIndex = state.items.findIndex(
        (item) => item.id == action.payload.id
      );
      if (findIndex >= 0) {
        state.items[findIndex].quantity += 1;
      } else {
        const tempItems = { ...action.payload, quantity: 1 };
        state.items.push(tempItems);
      }
    },
    deleteItem: (state, action) => {
      const indexItem = state.items.findIndex(
        (item) => item.id == action.payload
      );

      if (state.items[indexItem].quantity > 1) {
        state.items[indexItem].quantity -= 1;
      } else {
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
    },
    clearItem: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, deleteItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;
