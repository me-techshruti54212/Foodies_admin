import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import OrdersList from "../../pages/OrdersList";

export const fetchOrdersList = createAsyncThunk("list", async (url) => {
  const response = await axios.get(`${url}api/order/listOrders`);
  console.log(response.data.data)
  return response.data.data;
});
const OrdersListSlice = createSlice({
  name: "orders",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOrdersList.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchOrdersList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchOrdersList.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

// export const {DisplayList}=ListItemsSlice
export default OrdersListSlice.reducer;
