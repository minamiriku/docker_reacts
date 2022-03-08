import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "redux/counterSlice";
import userReducer from "redux/userSlice";

//MEMO: storeの作成
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
