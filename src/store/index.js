import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "store/reducers";

export default configureStore({
  reducer: rootReducer,
});
