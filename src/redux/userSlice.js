import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  onboardingDone: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    completeOnboarding: (state) => {
      state.onboardingDone = true;
    },
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    }
  }
});

export const { completeOnboarding, login, logout } = userSlice.actions;
export default userSlice.reducer;
