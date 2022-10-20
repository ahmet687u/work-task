import { apiSlice } from "./apiSlice";

export const wheatherApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getWheather: builder.query({
      query: () => `wheatherData.json`,
    })
  })
})

export const { useGetWheatherQuery } = wheatherApi