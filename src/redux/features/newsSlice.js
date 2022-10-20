import { createSlice } from '@reduxjs/toolkit'
import { newsApi } from '../services/newsApi';

const initialState = {
  data: [],
  showModal: false
}

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setShowModal: (state, { payload }) => {
      state.showModal = payload
    }
  },
  extraReducers: build => {
    build
      .addMatcher(newsApi.endpoints.getNews.matchFulfilled, (state, { payload }) => {
        state.data = payload
      })
  }
});

export const { setShowModal } = newsSlice.actions

export default newsSlice.reducer