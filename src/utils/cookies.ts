import Cookies from 'js-cookie';

// User
const tokenKey = 'access_token';
export const getToken = () => Cookies.get(tokenKey);
export const setToken = (token: string) => Cookies.set(tokenKey, token);
export const removeToken = () => Cookies.remove(tokenKey);

// RememberUser
const rememberUser = 'remember_user';
export const getRememberUser = () => Cookies.get(rememberUser);
export const setRememberUser = (value: string) => Cookies.set(rememberUser, value);
export const removeRememberUser = () => Cookies.remove(rememberUser);

// UserInfo
const userInfo = 'user_info';
export const getUserInfo = () => Cookies.get(userInfo);
export const setUserInfo = (user: string) => Cookies.set(userInfo, user);
export const removeUserInfo = () => Cookies.remove(userInfo);

