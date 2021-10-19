import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
  name: "toolkit slice",
  initialState: {
    count: 0,
    words: [],
  },
  reducers: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
    addWord(state, action) {
      state.words.push(action.payload);
    },
    removeWord(state) {
      state.words.pop();
    },
  },
});

export default toolkitSlice.reducer;
export const { increment, decrement, addWord, removeWord } = toolkitSlice.actions;
