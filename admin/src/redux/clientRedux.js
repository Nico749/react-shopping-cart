import { createSlice } from "@reduxjs/toolkit";

export const clientSlice = createSlice({
    name: "client",
    initialState: {
        clients: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        //get all clients (no action because is only fetching)
        getClientStart: (state) => {
            state.isFetching = true
            state.error = false
        },
        getClientSuccess: (state, action) => {
            state.isFetching = false
            state.clients = action.payload
        },
        getClientFailure: (state) => {
            state.isFetching = false
            state.error = true
        },
          //delete clients
          deleteClientStart: (state) => {
            state.isFetching = true
            state.error = false
        },
          deleteClientSuccess: (state, action) => {
            state.isFetching = false
            //splice is only available with redux/toolkit, we remove the client whose id matches with our specific client
            state.clients.splice(
                state.clients.findIndex((item) => item._id === action.payload),1
            )
        },
          deleteClientFailure: (state) => {
            state.isFetching = false
            state.error = true
        },
         //update clients
         updateClientStart: (state) => {
            state.isFetching = true
            state.error = false
        },
          updateClientSuccess: (state, action) => {
            state.isFetching = false
            state.clients[
                state.clients.findIndex((item) => item._id === action.payload.id)] = action.payload.client
            
        },
          updateClientFailure: (state) => {
            state.isFetching = false
            state.error = true
        },
         //add client
         addClientStart: (state) => {
            state.isFetching = true
            state.error = false
        },
          addClientSuccess: (state, action) => {
            state.isFetching = false
            state.clients.push(action.payload)
            
        },
          addClientFailure: (state) => {
            state.isFetching = false
            state.error = true
        }
    },
});

export const { getClientStart,getClientFailure,getClientSuccess, deleteClientFailure,deleteClientStart,deleteClientSuccess,
    updateClientFailure,updateClientSuccess,updateClientStart, addClientFailure,addClientStart,addClientSuccess

} = clientSlice.actions;

export default clientSlice.reducer;