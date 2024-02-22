import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from 'src/models/User';

type UserState = {
    user: User;
    isAuth: boolean;
};

const initialState: UserState = {
    user: {} as User,
    isAuth: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state, action: PayloadAction<User>) {
            state.user = action.payload;
            state.isAuth = true;
        },
        registration(state, action: PayloadAction<User>) {
            state.user = action.payload;
            state.isAuth = true;
        },
        logout(state) {
            state.user = {} as User;
            state.isAuth = false;
        },
    },
});

export default userSlice.reducer;
