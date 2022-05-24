import { loginFailure, loginStart, loginSuccess, logout, adminloginFailure, adminloginStart, adminloginSuccess } from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";
import {  addClientFailure,addClientStart,addClientSuccess
 } from "./clientRedux";
 import { getProductStart,getProductFailure,getProductSuccess, deleteProductFailure,deleteProductStart,deleteProductSuccess,
  updateProductFailure,updateProductSuccess,updateProductStart, addProductFailure,addProductStart,addProductSuccess
 } from "./productRedux";

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

//we need to be admin to delete a product
export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    const res = await publicRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    const res = await publicRequest.update(`/products/${id}`);
    dispatch(updateProductSuccess({ id: id, product: product }));
  } catch (err) {
    dispatch(updateProductFailure());
  }
}


export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await publicRequest.post(`/products/`, product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
}
