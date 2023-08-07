import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({
  reducerPath: "quizApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
    mode: "cors"
  }),
  endpoints: () => ({

  }),
});

export default api;