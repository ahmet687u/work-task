import { createSlice } from '@reduxjs/toolkit'
import { newsApi } from '../services/newsApi';

const initialState = {
  data: [],
  showModal: false,
  currentItem: null,
  counter: 0
}

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNewsFeatureByName: (state, { payload }) => {
      state[payload?.name] = payload?.value
    }
  },
  extraReducers: build => {
    build
      .addMatcher(newsApi.endpoints.getNews.matchFulfilled, (state, { payload }) => {
        state.data = payload
      })
  }
});

export const { setShowModal, setNewsFeatureByName } = newsSlice.actions

export default newsSlice.reducer