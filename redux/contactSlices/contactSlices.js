import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axios.get("/api/contacts", config);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

export const postContacts = createAsyncThunk(
  "contacts/postContacts",
  async (contact, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axios.post("/api/contacts", contact, config);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

const initialState = {
  contacts: [],
  contact: {},
  error: "",
  success: "",
  loading: false,
};

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    clearError(state) {
      state.error = "";
    },
  },
  extraReducers: {
    [fetchContacts.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.loading = false;
      state.contacts = action.payload;
    },
    [fetchContacts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [postContacts.pending]: (state, action) => {
      state.loading = true;
    },
    [postContacts.fulfilled]: (state, action) => {
      state.loading = false;
      state.success = true;
      state.contacts = action.payload;
    },
    [postContacts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { clearError } = contactSlice.actions;
export default contactSlice.reducer;
