import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/users.slice";

export const setupStore = () => {
  return configureStore({
    reducer: { users: usersReducer },
  });
};
