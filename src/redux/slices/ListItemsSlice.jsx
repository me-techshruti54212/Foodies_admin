import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchList = createAsyncThunk("list", async (url) => {
  const response = await axios.get(`${url}/api/food/list`);
  return response.data.data;
});
const ListItemsSlice = createSlice({
  name: "list",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchList.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchList.rejected, (state, action) => {
      console.log(action.payload);
      state.isError = true;
    });
  },
});

// export const {DisplayList}=ListItemsSlice
export default ListItemsSlice.reducer;
