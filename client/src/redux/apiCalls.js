import { loginFailure, loginStart, loginSuccess, logout } from "./userRedux";
import { publicRequest } from "../requestMethods";
import {  addClientFailure,addClientStart,addClientSuccess
 } from "./clientRedux";

 //login, register and logout api

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
export const userLogout = async (dispatch) =>{
  dispatch(logout())
  
}

export const addClient = async (user, dispatch) => {
  dispatch(addClientStart());
  try {
    const res = await publicRequest.post(`/auth/register`,user);
    dispatch(addClientSuccess(res.data));
  } catch (err) {
    dispatch(addClientFailure());
  }
}
