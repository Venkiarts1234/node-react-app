import { configureStore } from "@reduxjs/toolkit";
import MetricsReducer from "./MetricsSlice";

const store = configureStore({
  reducer: {
    metrics: MetricsReducer,
  },
});

export default store;
