import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  loading: false,
};

const ENDPOINT = 'https://dummyjson.com/products/search?q=';

export const fetchProductsFromApi = createAsyncThunk(
  'products/fetchProducts',
  async (searchTerm) => {
    const response = await fetch(
      encodeURI(ENDPOINT + searchTerm),
    ).then((res) => res.json());
    return response.products;
  },
);

export const productsSlice = createSlice({
  name: 'Products',
  initialState,
  reducers: {
    add: (state, action) => {
      state.products = action.payload;
    },
  },
  extraReducers: {
    [fetchProductsFromApi.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [fetchProductsFromApi.pending]: (state, action) => {
      state.loading = true;
    },
  },
});
