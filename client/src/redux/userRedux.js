import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      localStorage.setItem('user', JSON.stringify(state.currentUser.username));
      window.location.assign('/');
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    
    logout:(state) =>{
      localStorage.removeItem('user');
      localStorage.removeItem('cart')
      state.currentUser = null
      window.location.assign('/');

    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } = userSlice.actions;
export default userSlice.reducer;