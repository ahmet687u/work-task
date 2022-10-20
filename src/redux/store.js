import { configureStore } from '@reduxjs/toolkit'

/**
 * Import slices
 */
import todoSlice from './features/todoSlice'

/**
 * Import api slice
 */
import { apiSlice } from './services/apiSlice'

export const store = configureStore({
  reducer: {
    todos: todoSlice,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
})