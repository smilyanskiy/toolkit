import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface IUser {
  id: number;
  name: string;
  email: string;
}

export const fetchUsers = createAsyncThunk("user/fetchAll", async () => {
  const response = await axios.get<IUser[]>(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
});
