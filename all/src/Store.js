import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./Context";
export const store = configureStore({
  reducer: { myReducer },
});
