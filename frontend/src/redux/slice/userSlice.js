import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  username: localStorage.username,
  password: '',
  email: localStorage.email,
  token: localStorage.token,
  role: localStorage.role
}

const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setUsername(state, { payload }) {
      state.username = payload
      localStorage.setItem('username', payload)
    },
    setPassword(state, { payload }) { state.password = payload },
    setEmail(state, { payload }) {
      state.email = payload
      localStorage.setItem('email', payload)
    },
    setToken(state, { payload }) {
      state.token = payload;
      localStorage.setItem("token", payload);
    },
    setRole(state, { payload }) {
      state.role = payload;
      localStorage.setItem("role", payload);
    }
  }
});

export const { setEmail, setPassword, setUsername, setToken, setRole } = userSlice.actions

export default userSlice.reducer