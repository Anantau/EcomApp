// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/productSlice';
import authReducer from './slices/authSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    auth: authReducer,
  },
});

// 👇 These are the important types for hooks to use
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
