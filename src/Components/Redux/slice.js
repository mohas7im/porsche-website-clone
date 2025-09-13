import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCar: null,
};
const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    selectCar: (state, action) => {
      state.selectedCar = action.payload;
    },
  },
});

export const { selectCar } = carSlice.actions;
export default carSlice.reducer;
