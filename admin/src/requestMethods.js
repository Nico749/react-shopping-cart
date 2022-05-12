import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

const TOKEN =(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken)

//const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNzM3OGU0MjY1ZmZkYjk3ZDJiYTliYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MjM1MjIxOCwiZXhwIjoxNjUyMzU1ODE4fQ.0Co_IPyAbw4LJqfE9QxmpIQaH7K348dtFtDhlZoWsMY"
//retrieving user token from localStorage
if(localStorage.getItem("persist:root")){
//console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken)
}
// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
//const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` }
});