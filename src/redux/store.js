import { configureStore } from '@reduxjs/toolkit'

/**
 * Import slices
 */
import todoSlice from './features/todoSlice'
import newsSlice from './features/newsSlice'

/**
 * Import api slice
 */
import { apiSlice } from './services/apiSlice'

export const store = configureStore({
  reducer: {
    todos: todoSlice,
    news: newsSlice,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
})