import { createSlice } from "@reduxjs/toolkit";
import type { AppDispatch } from "redux/store";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
    error: false,
  },
  // MEMO: redux thunk
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setUsers: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    setError: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
  // MEMO: createAsyncThunk
  // extraReducers: {
  //   [getUsers.fulfilled]: (state, action) => {
  //     state.users = action.payload;
  //   },
  // },
});

// MEMO: redux thunk
export const getUsers = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(setLoading());
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .catch((error) => console.error());
    dispatch(setUsers(res));
  };
};

// MEMO: createAsyncThunk
// export const getUsers = createAsyncThunk("users/getUsers", async () => {
//   return await fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
//     res.json()
//   );
// });

export const { setUsers, setLoading, setError } = userSlice.actions;

export default userSlice.reducer;
