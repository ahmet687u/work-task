import { apiSlice } from "./apiSlice";

export const newsApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getNews: builder.query({
      query: () => `news.json`,
    })
  })
})

export const { useGetNewsQuery } = newsApi