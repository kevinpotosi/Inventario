import axios from 'axios';

const securityApi = axios.create({
    baseURL: 'https://security-module-utn.azurewebsites.net/api/auth' 
});

export const login = (credentials) => securityApi.post('login/', credentials);
export const logout = () => securityApi.post('logout/');
export const getCurrentUser = () => securityApi.get('current_user/');
