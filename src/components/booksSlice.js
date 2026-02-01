import { createSlice } from "@reduxjs/toolkit";
import { books as initialBooks } from "./data/book";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    list: initialBooks,
  },
  reducers: {
    addBook: (state, action) => {
      state.list.unshift(action.payload); 
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;