import { createSlice, SerializedError } from "@reduxjs/toolkit";
import { fetchUsers, IUser } from "./users.thunks";

export interface IusersState {
  data: IUser[] | null | unknown;
  status: boolean;
  error: SerializedError | null;
}

const initialState: IusersState = {
  data: null,
  status: false,
  error: null,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.status = false;
      state.error = null;
    });
    builder.addCase(fetchUsers.rejected, (state, { error }) => {
      state.status = false;
      state.error = error;
    });
    builder.addCase(fetchUsers.pending, (state) => {
      state.status = true;
      state.error = null;
    });
  },
});

const usersReducer = userSlice.reducer;

export default usersReducer;
