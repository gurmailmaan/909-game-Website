import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  isAuthOpen: false,
  cart: [],
  items: [],
  events:[],
  reviews:[]
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    setEvents: (state, action) => {
      state.events = action.payload;
    },
    setReviews: (state, action) => {
      state.reviews = action.payload;
    },

    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload.item];
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },

    increaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item.count++;
        }
        return item;
      });
    },

    decreaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id && item.count > 1) {
          item.count--;
        }
        return item;
      });
    },

    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },

    setIsAuthOpen: (state) => {
      state.isAuthOpen = !state.isAuthOpen;
    },
  },
});

export const {
  setItems,
  setEvents,
  setReviews,
  addToCart,
  removeFromCart,
  increaseCount,
  decreaseCount,
  setIsCartOpen,
  setIsAuthOpen
} = cartSlice.actions;

export default cartSlice.reducer;
