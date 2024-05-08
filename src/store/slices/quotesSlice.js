import { createSlice } from "@reduxjs/toolkit";
import { fetchQuotes } from "../thunks/fetchQuotes";

const quotesSlice = createSlice({
  name: "quotes",
  initialState: {
    isLoading: false,
    data: [],
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(fetchQuotes.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchQuotes.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchQuotes.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const quotesReducer = quotesSlice.reducer;
