import { configureStore } from "@reduxjs/toolkit";
import UserReducer from '../reduxdata/UserSlice';
import cartReducer from '../reduxdata/cartSlice';
const store = configureStore({
  reducer: {
    user : UserReducer,
    cart : cartReducer
  },
})

export default store;
