import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // old vanila that redux - dont mutate the state
    // state is the current state of the cart now current state is intialState
    addItem : (state,action) => {
      // mutating the  state
      // latest version we have to mutted ,  react toolkit use immer library  to  mutating the state
        state.items.push(action.payload);
    },

    removeItem : (state,action) => {
        const payload = action.payload;
        if (typeof payload === "number") {
          state.items.splice(payload, 1);
        } else {
          state.items = state.items.filter(
            (it) => it?.card?.info?.id !== payload
          );
        }
    },

    clearCard : (state,action) => {
        state.items = [];
    }


  }
});

export default cartSlice.reducer;
export const {addItem,removeItem,clearCard} = cartSlice.actions;