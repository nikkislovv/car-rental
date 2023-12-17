import axios from "axios"
import AuthService from "./AuthService"

export const API_URL = "https://localhost:5021"

const $api = axios.create({
    baseURL: API_URL
})


$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('access-token')}`
    return config;
})

$api.interceptors.response.use(config => {
    return config
}, async (error) => {
    const originalRequest = error.config;
    if(error.response.status === 401 && error.config && !error.config._isRetry){
        originalRequest._isRetry = true;
        try {
            const accessToken = localStorage.getItem("access-token")
            const refreshToken = localStorage.getItem("refresh-token")
            if(accessToken !== null && refreshToken !== null){
                const response = await AuthService.refreshTokens(accessToken, refreshToken);
                if(response.status === 200) {
                    localStorage.setItem("access-token", response.data.accessToken);
                    localStorage.setItem("refresh-token", response.data.refreshToken);
                    return $api.request(originalRequest);
                }
            }
        }
        catch (e){
            console.log(e)
            console.log("Не авторизован!")
        }
    }
})

export default $api;