import { createSlice } from "@reduxjs/toolkit";

//register a new user
export const employeeSlice = createSlice({
    name: "employee",
    initialState: {
        isFetching: false,
        error: false,
    },
    reducers: {
      
           //get all Employees (no action because is only fetching)
           getEmployeeStart: (state) => {
            state.isFetching = true
            state.error = false
        },
        getEmployeeSuccess: (state, action) => {
            state.isFetching = false
            state.employees = action.payload
        },
        getEmployeeFailure: (state) => {
            state.isFetching = false
            state.error = true
        },
          //delete Employees
          deleteEmployeeStart: (state) => {
            state.isFetching = true
            state.error = false
        },
          deleteEmployeeSuccess: (state, action) => {
            state.isFetching = false
            //we remove the Employee whose id matches with our specific Employee
            state.employees.splice(
                state.Employees.findIndex((item) => item._id === action.payload),1
            )
        },
          deleteEmployeeFailure: (state) => {
            state.isFetching = false
            state.error = true
        },
         //update Employees
         updateEmployeeStart: (state) => {
            state.isFetching = true
            state.error = false
        },
          updateEmployeeSuccess: (state, action) => {
            state.isFetching = false
            state.employees[
                state.Employees.findIndex((item) => item._id === action.payload.id)] = action.payload.Employee
            
        },
          updateEmployeeFailure: (state) => {
            state.isFetching = false
            state.error = true
        },
         //add Employee
         addEmployeeStart: (state) => {
            state.isFetching = true
            state.error = false
        },
          addEmployeeSuccess: (state, action) => {
            state.isFetching = false
            state.employees.push(action.payload)
            
        },
          addEmployeeFailure: (state) => {
            state.isFetching = false
            state.error = true
        }
    },
});

export const { getEmployeeStart,getEmployeeFailure,getEmployeeSuccess, deleteEmployeeFailure,deleteEmployeeStart,deleteEmployeeSuccess,
    updateEmployeeFailure,updateEmployeeSuccess,updateEmployeeStart, addEmployeeFailure,addEmployeeStart,addEmployeeSuccess

} = employeeSlice.actions;

export default employeeSlice.reducer;