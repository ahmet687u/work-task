import { createSlice } from '@reduxjs/toolkit'
import { todoApi } from '../services/todoApi';

const initialState = {
  data: [],
  searchData: [],
  filteredTodo: []
}

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setFeatureByName: (state, { payload }) => {
      state[payload?.name] = payload?.value
    },
    removeTodoByName: (state, { payload }) => {
      state.data = state.data?.filter(item => item.subject !== payload)
    },
    editTodoByName: (state, { payload }) => {
      state.data = state.data?.map(item => item.subject === payload.subject ? ({ ...item, ...payload.data }) : item)
    },
    changeCheckStatus: (state, { payload }) => {
      state.data = state.data?.map(item => item.subject === payload.subject ? ({ ...item, isCompleted: payload.isCompleted }) : item)
    }
  },
  extraReducers: build => {
    /**
     * fetch local json file then set redux state
     */
    build
      .addMatcher(todoApi.endpoints.getTodos.matchFulfilled, (state, { payload }) => {
        /**
         * Verilerin güncelleme ve silmesini yaparken ihtiyaç duyulacağından her veriye benzersiz bir id değeri ekliyoruz
         */
        state.data = payload
      })
  }
});

export const { setFeatureByName, removeTodoByName, editTodoByName, changeCheckStatus } = todoSlice.actions

export default todoSlice.reducer