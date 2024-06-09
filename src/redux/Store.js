import { configureStore } from "@reduxjs/toolkit";
import ListItemsSlice from "./slices/ListItemsSlice";

const Store = configureStore({
  reducer: {
    list: ListItemsSlice,
  },
});

export default Store;
