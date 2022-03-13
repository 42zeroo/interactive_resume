import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import transitionReducer from "./features/transitionSlice";
import layoutReducer from "./features/layoutSlice";

const store = configureStore({
  reducer: {
    transition: transitionReducer,
    layout: layoutReducer
  }
});

setupListeners(store.dispatch);

export default store;
