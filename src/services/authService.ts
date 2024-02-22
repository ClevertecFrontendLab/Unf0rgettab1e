import { AxiosResponse } from 'axios';
import { AuthResponse } from '@models/response/AuthResponse';
import $api from '@api';

export const loginService = async (
    email: string,
    password: string,
): Promise<AxiosResponse<AuthResponse>> => {
    return $api.post<AuthResponse>('/auth/login', { email, password });
};

export const registrationService = async (
    email: string,
    password: string,
): Promise<AxiosResponse<AuthResponse>> => {
    return $api.post<AuthResponse>('/auth/registration', { email, password });
};

export const logoutService = async (): Promise<void> => {
    return $api.post('/login');
};
