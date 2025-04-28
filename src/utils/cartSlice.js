import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // mutating the existing state over here as WE HAVE TO MUTATE THE STATE IN NEW VERSION and we don't have to return anything as REdux takes care of that automagically..
      // Redux toolkit uses immer library behind the scenes.
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      // console.log(state);
      // console.log(current(state)); // For debugging, wrap the redux object inside current function.

      // state.items.length = 0; // []

      // RTK - either Mutate the state or return a new State.
      // return [] // We can also return an empty state object to clear cart.
      return { items: [] }; // This new object will be replaced inside the  original state = {items: []}
    },
  },
});
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
