import { Apis } from "../config/index.js";
import apiConfig from "../apiConfig.js";
import { NotificationManager } from "react-notifications";

export const getUserLogin = async (data) => {
    try {
        let result = await apiConfig.post(Apis.GetUserLogin, data, {
            withCredentials: true,
            headers: {
                "Access-Control-Allow-origin": "*",
                "origin": "http://localhost:3000",
                "crossorigin": "true"
            }
        });
        if (result.data.error) {
            NotificationManager.error(result.data.error);
            return null;
        }
        return result.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const getUserRegister = async (data) => {
    try {
        let result = await apiConfig.post(Apis.GetUserRegister, data);
        if (result.data.error) {
            NotificationManager.error(result.data.error);
            return null;
        }
        return result.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const authenticate = async (data, email) => {
    if (typeof window !== "undefined") {
        sessionStorage.setItem('_sid', data)
        sessionStorage.setItem('email', email)
        setTimeout(
            function () {
                window.location = "/";
            },
            1000
        );
    }
};

export const getCustomerDetail = async (email) => {
    try {
        let result = await apiConfig.get(Apis.GetCustomerDetails + email);
        if (result.data.error) {
            NotificationManager.error(result.data.error);
            return null;
        }
        return result.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const getCustomerUpdate = async (data) => {
    try {
        let result = await apiConfig.post(Apis.GetCustomerUpdateDetails,{data});
        if (result.data.error) {
            NotificationManager.error(result.data.error);
            return null;
        }
        return result.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const authenticateByCart = async (token, email) => {
    if (typeof window !== "undefined") {
       sessionStorage.setItem('_sid', token)
       sessionStorage.setItem('email', email)
        setTimeout(
            function () {
                window.location.href = "/checkout";
            },
            1000
        );
    } else {
        NotificationManager.error("Please check your login", "Input Error");
    }
};

export const logout = (next) => {
    if (typeof window !== "undefined") {
        sessionStorage.removeItem('_sid');
        sessionStorage.removeItem('email');
        window.location.href = "/";
        next();
    }
};

export const isAuthenticate = () => {
    if (typeof window == 'undefined') {
        return false;
    }
    return sessionStorage.getItem('_sid');
};