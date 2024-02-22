import { loginService, logoutService, registrationService } from '@services/authService';
import { userSlice } from '@redux/reducers/UserSlice';
import { AppDispatch } from '@redux/configure-store';

export const login = (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
        const response = await loginService(email, password);
        console.log('login', response);

        localStorage.setItem('token', response.data.accessToken);
        const { login } = userSlice.actions;
        dispatch(login({ email }));
    } catch (e) {
        console.log(e);
    }
};

export const registration = (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
        const response = await registrationService(email, password);
        console.log('registration', response);

        localStorage.setItem('token', response.data.accessToken);
        const { registration } = userSlice.actions;
        dispatch(registration({ email }));
    } catch (e) {
        console.log(e);
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
