import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiKey = 'pub_469662f92806ecfaf883972f9280017b86b67';

export const fetchInitialNews = createAsyncThunk('news/fetchInitialNews', async () => {
  const responses = await Promise.all([
    fetch(`https://newsdata.io/api/1/latest?apikey=${apiKey}`),
    fetch(`https://newsdata.io/api/1/latest?apikey=${apiKey}&q=india`),
    fetch(`https://newsdata.io/api/1/latest?apikey=${apiKey}&q=movies`)
  ]);
  const data = await Promise.all(responses.map(res => res.json()));
  return data.flatMap(result => result.results);
});

export const fetchNewsByKeyword = createAsyncThunk('news/fetchNewsByKeyword', async (keyword) => {
  const response = await fetch(`https://newsdata.io/api/1/latest?apikey=${apiKey}&q=${keyword}`);
  const data = await response.json();
  return data.results;
});

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    news: [],
    keyword: '',
    loading: false,
    error: null,
    cache: {},
  },
  reducers: {
    setKeyword: (state, action) => {
      state.keyword = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInitialNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchInitialNews.fulfilled, (state, action) => {
        state.loading = false;
        state.news = action.payload;
      })
      .addCase(fetchInitialNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchNewsByKeyword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNewsByKeyword.fulfilled, (state, action) => {
        state.loading = false;
        state.news = action.payload;
        state.cache[state.keyword] = action.payload;
      })
      .addCase(fetchNewsByKeyword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setKeyword } = newsSlice.actions;
export default newsSlice.reducer;
