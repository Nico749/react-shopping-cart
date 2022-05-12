import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken || "";
//const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNzM3OGU0MjY1ZmZkYjk3ZDJiYTliYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MjMyNzU4MywiZXhwIjoxNjUyMzM0NzgzfQ.gprnKFv6GjzRQRwjmau8ZeIe__1oTlRzgTfp55AW6Qs"
//retrieving user token from localStorage
//console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken)

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
//const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});