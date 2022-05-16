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
      window.location.assign('/');
            
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
     
    },
    logout: (state) => {
      localStorage.removeItem('user');

      //state.currentUser = null;
      window.location.assign('/login');
    },
  },
});

export const { loginStart, loginSuccess, loginFailure,logout } = userSlice.actions;
export default userSlice.reducer;