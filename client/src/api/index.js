// ../../api/index.js
import axios from "axios";

export const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
    try {
        const user_info = localStorage.getItem("user_info");
        if (user_info) {
            const token = JSON.parse(user_info).token;
            if (token) {
                req.headers.Authorization = `Bearer ${token}`;
            }
        }
    } catch (error) {
        console.error("Erreur lors de la configuration de l'en-tête d'autorisation :", error);
    }
    return req;
});

export const signIn = (data) => API.post("/users/signin", data);
export const signInGoogle = (accessToken) => API.post("/users/signin", { googleAccessToken: accessToken });
export const signUp = (data) => API.post("/users/signup", data);
export const signUpGoogle = (accessToken) => API.post("/users/signup", { googleAccessToken: accessToken });
