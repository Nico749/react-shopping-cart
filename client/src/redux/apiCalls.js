import { loginFailure, loginStart, loginSuccess, logout, adminloginFailure, adminloginStart, adminloginSuccess } from "./userRedux";
import { publicRequest } from "../requestMethods";
import {  addClientFailure,addClientStart,addClientSuccess
 } from "./clientRedux";
import { getProductFailure, getProductSuccess, getProductStart } from "./productRedux";

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

export const adminLogin = async (dispatch, user) => {
  dispatch(adminloginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(adminloginSuccess(res.data));
  } catch (err) {
    dispatch(adminloginFailure());
  }
};

export const userLogout = async (dispatch) => {
  dispatch(logout())

}

export const addClient = async (user, dispatch) => {
  dispatch(addClientStart());
  try {
    const res = await publicRequest.post(`/auth/register`, user);
    dispatch(addClientSuccess(res.data));
  } catch (err) {
    dispatch(addClientFailure());
  }
}

//public request because you don't need to be admin to retrieve products
export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/products");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};