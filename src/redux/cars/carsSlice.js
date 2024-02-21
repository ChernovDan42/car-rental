import { createSlice, isAnyOf } from '@reduxjs/toolkit';

const carsInitialState = {
  cars: [],
  favoritesCars: [],
  isLoading: false,
  error: null,
};

export const carsSlice = createSlice({
  name: 'cars',
  initialState: carsInitialState,
  reducers: {},
});
