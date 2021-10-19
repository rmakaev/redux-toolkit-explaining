import { createReducer, createAction } from "@reduxjs/toolkit";

const InitialState = {
  count: 0,
};

export const Increment = createAction("INCREMENT");
export const Decrement = createAction("DECREMENT");

export default createReducer(InitialState, {
  [Increment]: function (state) {
    state.count += 1;
  },
  [Decrement]: function (state) {
    state.count -= 1;
  },
});
