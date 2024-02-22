import axios from 'axios';

export const API_URL = 'https://marathon-api.clevertec.ru';

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
    headers: { 'Content-type': 'application/json' },
});

export default $api;
