import { configureStore } from "@reduxjs/toolkit";
import { issueSlice } from "./slice/issue";

export const store = configureStore({
  reducer: {
    issue: issueSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
