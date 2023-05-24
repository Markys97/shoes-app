import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./slices/productSlice";

export const storeApp = configureStore({
   reducer:{
    product:productSlice.reducer,
   }
})