import { User } from "@/services/type";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface AuthState {
  isLoggedIn: boolean;
  user: User;
}

const initialState: AuthState = {
  isLoggedIn: false,
  user: {} as User,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsLoggedIn: (state, action: PayloadAction<any>) => {
      state.isLoggedIn = action.payload;
    },
    setMe: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },

    // register: (state, action: PayloadAction<User>) => {
    //   state.user = action.payload;
    //   state.isLoggedIn = true;
    // },
    // logout: (state) => {
    //   state.user = null;
    //   state.isLoggedIn = false;
    // },
  },
});

export const {setIsLoggedIn, setMe} = authSlice.actions;
export default authSlice.reducer;
