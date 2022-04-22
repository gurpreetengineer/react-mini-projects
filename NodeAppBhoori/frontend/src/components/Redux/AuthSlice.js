import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isUserLoggedIn: false,
  userToken: null,
}

const AuthSlice = createSlice({
  name: 'authenticationSlice',
  initialState: initialState,
  reducers: {
    UserAllowance(action, state) {
      if (state.isUserLoggedIn !== 'false' && state.isUserLoggedIn !== false) {
        localStorage.setItem('isUserAuthenticated', state.payload.isUserLoggedIn);
        localStorage.setItem('userToken', state.payload.userToken);
      }
      return {
        isUserLoggedIn: state.payload.isUserLoggedIn,
        userToken: state.payload.userToken
      }
    }
  }
});

export const { UserAllowance } = AuthSlice.actions;
export default AuthSlice.reducer;