import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../Reducers/UserReducer";
const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;

export const server = "http://localhost:8080/api/v1";
// "proxy": "http://localhost:8080",
