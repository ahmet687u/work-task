import { createSlice } from '@reduxjs/toolkit'
import { todoApi } from '../services/todoApi';

const initialState = {
  data: [],
  searchData: []
}

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setFeatureByName: (state, { payload }) => {
      state[payload?.name] = payload?.value
    }
  },
  extraReducers: build => {
    /**
     * fetch local json file then set redux state
     */
    build
      .addMatcher(todoApi.endpoints.getTodos.matchFulfilled, (state, { payload }) => {
        state.data = payload
      })
  }
});

export const { setFeatureByName } = todoSlice.actions

export default todoSlice.reducer