import Cookies from 'js-cookie';

// User
const tokenKey = 'access_token';
export const getToken = () => Cookies.get(tokenKey);
export const setToken = (token: string) => Cookies.set(tokenKey, token);
export const removeToken = () => Cookies.remove(tokenKey);

// rememberUser
const rememberUser = 'remember_user';
export const getRememberUser = () => Cookies.get(rememberUser);
export const setRememberUser = (value: string) => Cookies.set(rememberUser, value);
export const removeRememberUser = () => Cookies.remove(rememberUser);
