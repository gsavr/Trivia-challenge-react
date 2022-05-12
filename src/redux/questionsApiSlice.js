import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://opentdb.com",
  }),
  endpoints(builder) {
    return {
      fetchQuestions: builder.query({
        query({ difficulty, amount }) {
          return `/api.php?amount=${amount}&difficulty=${difficulty}&type=boolean`;
        },
      }),
    };
  },
});

export const { useFetchQuestionsQuery } = apiSlice;
