import { combineReducers } from "@reduxjs/toolkit";

import toolkitSlice from "store/slices/toolkit";

export default combineReducers({
  toolkit: toolkitSlice,
});
