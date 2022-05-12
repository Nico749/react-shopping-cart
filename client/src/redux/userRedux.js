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
    
      //localStorage.setItem('id_token', JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken);
      state.isFetching = false;
      state.currentUser = action.payload;
      window.location.assign('/');
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    
    logout:(state) =>{
      localStorage.removeItem('id_token', JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken);
       state.currentUser = null
    },
    logoutFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } = userSlice.actions;
export default userSlice.reducer;