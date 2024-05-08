import { crtateAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../../App/apiService";

const fetchQuotes = crtateAsyncThunk("quotes/fetch", async () => {
  const response = await apiService.get();
  return response;
});

export { fetchQuotes };
