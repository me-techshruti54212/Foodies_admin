import { configureStore } from "@reduxjs/toolkit";
import ListItemsSlice from "./slices/ListItemsSlice";
import OrdersListSlice  from "./slices/OrdersListSlice";

const Store = configureStore({
  reducer: {
    list: ListItemsSlice,
    orders:OrdersListSlice,
  },
  middleware:(getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default Store;
