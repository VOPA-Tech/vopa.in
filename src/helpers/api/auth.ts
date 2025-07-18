import { APICore } from './apiCore';

const api = new APICore();

// account
function login(params: { email: string; password: string }) {
    const baseUrl = 'http://localhost:5000/api/auth/login';
    return api.create(baseUrl, params);
}

function logout() {
    const baseUrl = 'http://localhost:5000/api/auth/logout';
    return api.create(baseUrl, {});
}

function signup(params: { fullname: string; email: string; password: string }) {
    const baseUrl = 'http://localhost:5000/api/auth/register';
    return api.create(baseUrl, params);
}

function forgotPassword(params: { email: string }) {
    const baseUrl = 'http://localhost:5000/api/auth/forget-password';
    return api.create(baseUrl, params);
}

export { login, logout, signup, forgotPassword };
