import { createSlice } from "@reduxjs/toolkit";

export const clientSlice = createSlice({
    name: "client",
    initialState: {
        currentUser:null,
        isFetching: false,
        error: false,
    },
    reducers: {
      
         addClientStart: (state) => {
            state.isFetching = true
            state.error = false
        },
          addClientSuccess: (state, action) => {
            state.isFetching = false
            state.clients.push(action.payload)
            //window.location.assign('/');
            localStorage.setItem('user', JSON.stringify(state.currentUser.username));
            
            
        },
          addClientFailure: (state) => {
            state.isFetching = false
            state.error = true
        }
    },
});

export const {  addClientFailure,addClientStart,addClientSuccess

} = clientSlice.actions;

export default clientSlice.reducer;