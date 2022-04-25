import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "metricsSlice",
  metrics: {},
};

export const MetricsSlice = createSlice({
  name: "metricsSlice",
  initialState: initialState,
  reducers: {
    getMetrics(state, action) {
      state.metrics = action.payload.metrics;
    },
  },
});

export const MetricsActions = MetricsSlice.actions;
export default MetricsSlice.reducer;
