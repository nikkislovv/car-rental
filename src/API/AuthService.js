import $api from "./index"

export default class AuthService {
    static async registration(userName, fullName, password, email, phoneNumber) {
        return await $api.post("/1.0/Accounts/user", {
            userName,
            fullName,
            password,
            email,
            phoneNumber
        })
    }

    static async login(userName, password) {
        return await $api.post("/1.0/Accounts/login", {
            userName,
            password
        })
    }
    
    static async refreshTokens(accessToken, refreshToken) {
        return await $api.post("/1.0/Accounts/refresh-token", {
            accessToken,
            refreshToken
        })
    }
}