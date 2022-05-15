// import { loginFailure, loginStart, loginSuccess } from "./userRedux";
// import { publicRequest } from "../requestMethods";

// export const login = async (dispatch, user) => {
//   dispatch(loginStart());
//   try {
//     const res = await publicRequest.post( {
//         headers: {            
//            'Access-Control-Allow-Origin':'*',
//            'Access-Control-Allow-Methods': 'POST',
//            'Access-Control-Allow-Headers':'*',
//            'cache-control': 'no-cache'
//          },
//          url:"/auth/login"}, user)
//     dispatch(loginSuccess(res.data));
//     console.log("logged")
//   } catch (err) {
//     dispatch(loginFailure("Log in failed"));
//   }
// };

import { loginFailure, loginStart, loginSuccess, logout } from "./userRedux";
import { publicRequest } from "../requestMethods";
import {  addClientFailure,addClientStart,addClientSuccess
 } from "./clientRedux";
import { cartLogout } from "./cartRedux";

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

// export const totalLogout = async (dispatch) =>{
//   dispatch(cartLogout)
// }

export const addClient = async (user, dispatch) => {
  dispatch(addClientStart());
  try {
    const res = await publicRequest.post(`/auth/register`,user);
    dispatch(addClientSuccess(res.data));
  } catch (err) {
    dispatch(addClientFailure());
  }
}