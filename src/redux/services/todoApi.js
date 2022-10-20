import { apiSlice } from "./apiSlice";

export const todoApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getTodos: builder.query({
      query: () => `todoListTasks.json`,
    })
  })
})

export const { useGetTodosQuery } = todoApi