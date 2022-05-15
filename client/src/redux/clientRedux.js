import { createSlice } from "@reduxjs/toolkit";

export const clientSlice = createSlice({
    name: "client",
    initialState: {
        clients: [],
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
            localStorage.setItem('user', JSON.stringify(state.currentUser.username));
            window.location.assign('/');
            
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