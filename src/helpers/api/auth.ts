import { APICore } from './apiCore';

const api = new APICore();
const BASE_URL = process.env.REACT_APP_API_BASE_URL as string;

// account
function login(params: { email: string; password: string }) {
    const url = `${BASE_URL}/auth/login`;
    return api.create(url, params);
}

function logout() {
    const url = `${BASE_URL}/auth/logout`;
    return api.create(url, {});
}

function signup(params: { fullname: string; email: string; password: string }) {
    const url = `${BASE_URL}/auth/register`;
    return api.create(url, params);
}

function forgotPassword(params: { email: string }) {
    const url = `${BASE_URL}/auth/forget-password`;
    return api.create(url, params);
}

export { login, logout, signup, forgotPassword };
