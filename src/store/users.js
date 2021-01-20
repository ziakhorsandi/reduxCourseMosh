import { createSlice } from '@reduxjs/toolkit';

let userId = 1;

const slice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    userAdded: (users, action) => {
      users.push({
        id: userId,
        name: action.payload.userName,
      });
    },
  },
});

export const { userAdded } = slice.actions;
export default slice.reducer;
