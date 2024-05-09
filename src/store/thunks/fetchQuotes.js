import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../../app/apiService";

const fetchQuotes = createAsyncThunk("quotes/fetch", async () => {
  const response = await apiService.get();
  console.log("fetchQuotes", response);
  return response.data;
});

export { fetchQuotes };
