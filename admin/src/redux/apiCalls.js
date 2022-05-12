import { loginFailure, loginStart, loginSuccess, logout } from "./userRedux";
import { getProductStart,getProductFailure,getProductSuccess, deleteProductFailure,deleteProductStart,deleteProductSuccess,
  updateProductFailure,updateProductSuccess,updateProductStart, addProductFailure,addProductStart,addProductSuccess
 } from "./productRedux";
import { publicRequest, userRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
export const userLogout = async (dispatch, user) =>{
  dispatch(logout())
  
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
    const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

export const updateProduct = async (id,product, dispatch) => {
  dispatch(updateProductStart());
  try {
    const res = await userRequest.update(`/products/${id}`);
    dispatch(updateProductSuccess({id:id, product:product}));
  } catch (err) {
    dispatch(updateProductFailure());
  }
}


export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/products/`,product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
}