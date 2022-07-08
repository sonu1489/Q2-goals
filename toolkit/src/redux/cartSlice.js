import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      const newList = state.filter((item) => item.id !== action.payload);

      return (state = newList);
    },
    updated(state, action) {
      state = action.payload;
      return state;

      // console.log(action.payload);
    },
  },
});

export const { add, remove, updated } = cartSlice.actions;
export default cartSlice.reducer;
