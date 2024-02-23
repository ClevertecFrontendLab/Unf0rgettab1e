import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from 'src/models/User';

type UserState = {
    user: User;
    isAuth: boolean;
    isLoading: boolean;
};

const initialState: UserState = {
    user: {} as User,
    isAuth: false,
    isLoading: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state, action: PayloadAction<User>) {
            state.user = action.payload;
            state.isAuth = true;
            state.isLoading = false;
        },
        registration(state, action: PayloadAction<User>) {
            state.user = action.payload;
            state.isAuth = true;
            state.isLoading = false;
        },
        logout(state) {
            state.user = {} as User;
            state.isAuth = false;
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        },
    },
});

export default userSlice.reducer;
