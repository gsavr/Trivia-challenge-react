import { configureStore } from "@reduxjs/toolkit";
import answersSlice from "./answersSlice";
import { apiSlice } from "./questionsApiSlice";

//store sends reducers rto index.js
export default configureStore({
  reducer: {
    answers: answersSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});
