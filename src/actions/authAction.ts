import { loginService, logoutService, registrationService } from '@services/authService';
import { userSlice } from '@redux/reducers/UserSlice';
import { AppDispatch } from '@redux/configure-store';
import { push } from 'redux-first-history';
import { paths } from '@utils/constants/paths';
import { isAxiosError } from 'axios';

export const login = (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
        const { login, setLoading } = userSlice.actions;
        dispatch(setLoading(true));

        const response = await loginService(email, password);
        localStorage.setItem('token', response.data.accessToken);
        dispatch(login({ email }));
        dispatch(push(paths.MAIN));
    } catch (e) {
        console.log(e);
        dispatch(push(paths.RESULT.ERROR_LOGIN));
    }
};

export const registration = (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
        const { registration, setLoading } = userSlice.actions;
        dispatch(setLoading(true));

        const response = await registrationService(email, password);
        localStorage.setItem('token', response.data.accessToken);
        dispatch(registration({ email }));
        dispatch(push(paths.RESULT.SUCCESS));
    } catch (e) {
        console.log(e);
        if (isAxiosError(e) && e.response?.status === 409) {
            dispatch(push(paths.RESULT.ERROR_USER_EXIST));
        } else {
            dispatch(push(paths.RESULT.ERROR));
        }
    }
};

export const logout = () => async (dispatch: AppDispatch) => {
    try {
        await logoutService();
        localStorage.removeItem('token');
        const { logout } = userSlice.actions;
        dispatch(logout());
    } catch (e) {
        console.log(e);
    }
};
