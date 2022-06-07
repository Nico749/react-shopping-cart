import { loginFailure, loginStart, loginSuccess, logout, adminloginFailure, adminloginStart, adminloginSuccess } from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";
import { getClientStart,getClientFailure,getClientSuccess, deleteClientFailure,deleteClientStart,deleteClientSuccess,
  updateClientFailure,updateClientSuccess,updateClientStart, addClientFailure,addClientStart,addClientSuccess
 } from "./clientRedux";
 import { getProductStart,getProductFailure,getProductSuccess, deleteProductFailure,deleteProductStart,deleteProductSuccess,
  updateProductFailure,updateProductSuccess,updateProductStart, addProductFailure,addProductStart,addProductSuccess
 } from "./productRedux";
 import { getEmployeeStart,getEmployeeFailure,getEmployeeSuccess, deleteEmployeeFailure,deleteEmployeeStart,deleteEmployeeSuccess,
  updateEmployeeFailure,updateEmployeeSuccess,updateEmployeeStart, addEmployeeFailure,addEmployeeStart,addEmployeeSuccess

} from './employeeRedux'
import {cartEnd, removeProduct} from './cartRedux'


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
export const cartLogout = async (dispatch) => {
  dispatch(cartEnd())

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
    //const res = await publicRequest.update(`/products/${id}`);
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

//get users
export const getClients = async (dispatch) => {
  dispatch(getClientStart());
  try {
    const res = await publicRequest.get("/users");
    dispatch(getClientSuccess(res.data));
  } catch (err) {
    dispatch(getClientFailure());
  }
};
//we need to be admin to delete a user
export const deleteClient = async (id, dispatch) => {
  dispatch(deleteClientStart());
  try {
    const res = await publicRequest.delete(`/users/${id}`);
    dispatch(deleteClientSuccess(id));
  } catch (err) {
    dispatch(deleteClientFailure());
  }
};

export const updateClient = async (id, client, dispatch) => {
  dispatch(updateClientStart());
  try {
    const res = await userRequest.update(`/users/${id}`);
    dispatch(updateClientSuccess({ id: id, product: client }));
  } catch (err) {
    dispatch(updateClientFailure());
  }
}

export const addClient = async (user, dispatch) => {
  dispatch(addClientStart());
  try {
    const res = await userRequest.post(`/auth/register`, user);
    dispatch(addClientSuccess(res.data));
  } catch (err) {
    dispatch(addClientFailure());
  }
}


//get users
export const getEmployees = async (dispatch) => {
  dispatch(getEmployeeStart());
  try {
    const res = await publicRequest.get("/admin/employee");
    dispatch(getEmployeeSuccess(res.data));
  } catch (err) {
    dispatch(getEmployeeFailure());
  }
};
//we need to be admin to delete a user
export const deleteEmployee = async (id, dispatch) => {
  dispatch(deleteEmployeeStart());
  try {
    const res = await publicRequest.delete(`/admin/employee/${id}`);
    dispatch(deleteEmployeeSuccess(id));
  } catch (err) {
    dispatch(deleteEmployeeFailure());
  }
};

export const updateEmployee = async (id, employee, dispatch) => {
  dispatch(updateEmployeeStart());
  try {
    const res = await publicRequest.update(`/admin/employee/${id}`);
    dispatch(updateEmployeeSuccess({ id: id, employee: employee }));
  } catch (err) {
    dispatch(updateEmployeeFailure());
  }
}

export const addEmployee = async (user, dispatch) => {
  dispatch(addEmployeeStart());
  try {
    const res = await publicRequest.post(`/admin/employee`, user);
    dispatch(addEmployeeSuccess(res.data));
  } catch (err) {
    dispatch(addEmployeeFailure());
  }
}