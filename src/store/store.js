import { makeAutoObservable } from "mobx";
import AuthService from "../API/AuthService";
import { parseJwt } from "../utils/parserJwt";
import axios from "axios"
import $api from "../API";

export default class Store {
    id = {};
    isAuth = false;
    isRegistered = false;
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool) {
        this.isAuth = bool;
    }

    setId(id) {
        this.id = id;
    }

    setRegistered(bool) {
        this.isRegistered = bool;
    }

    setLoading(bool) {
        this.isLoading = bool;
    }

    async login(userName, password) {
        try{
            const response = await AuthService.login(userName, password);
            if(response.status === 200) {
                localStorage.setItem("access-token", response.data.accessToken);
                localStorage.setItem("refresh-token", response.data.refreshToken)
                const id = parseJwt(response.data.accessToken)["Id"];
                this.setAuth(true);
                this.setRegistered(true);
                this.setId(id);
            }
        }
        catch (e) {
            console.log(e)
        }
    }

    async registration(userName, fullName, password, email, phoneNumber) {
        try{
            const response = await AuthService.registration(userName, fullName, password, email, phoneNumber);
            if(response.status === 200){
                this.setRegistered(true)
            }
        }
        catch (e) {
            console.log(e)
        }
    }

    async checkAuth() {
        this.setLoading(true);
        try {
            const accessToken = localStorage.getItem("access-token")
            const refreshToken = localStorage.getItem("refresh-token")
            const response = await AuthService.refreshTokens(accessToken, refreshToken);
            if(response.status === 200) {
                localStorage.setItem("access-token", response.data.accessToken);
                localStorage.setItem("refresh-token", response.data.refreshToken);
                const id = parseJwt(response.data.accessToken)["Id"];
                this.setAuth(true);
                this.setRegistered(true);
                this.setId(id);
                console.log(response)
                console.log(refreshToken)
                console.log(accessToken)
            }
        }
        catch (e) {
            console.log(e)
        }
        finally {
            this.setLoading(false);
        }
    }

    logout() {
        try {
            //sending to endpoint logout
            localStorage.removeItem("access-token");
            localStorage.removeItem("refresh-token")
            this.setAuth(false);
            this.setId({})
        }
        catch (e) {
            console.log(e)
        }
    }
}