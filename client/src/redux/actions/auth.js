// auth.js
import * as api from "../../api/index";
import { AUTH } from "../const/actionsTypes";

export const loadUser = () => async (dispatch) => {
    try {
        const localUser = JSON.parse(localStorage.getItem("user_info"));

        if (localUser) {
            dispatch({ type: AUTH, data: localUser });
        }
    } catch (error) {
        console.error("Erreur lors du chargement de l'utilisateur :", error);
    }
};

export const signin = (data, navigate) => async (dispatch) => {
    try {
        const { data: userData } = await api.signIn(data);

        dispatch({ type: AUTH, data: userData });
        navigate("/");
    } catch (error) {
        console.error("Erreur lors de la connexion :", error);
    }
};

export const signinGoogle = (accessToken, navigate) => async (dispatch) => {
    try {
        const { data: userData } = await api.signInGoogle(accessToken);

        dispatch({ type: AUTH, data: userData });
        navigate("/");
    } catch (error) {
        console.error("Erreur lors de la connexion Google :", error);
    }
};

export const signup = (formData, navigate) => async (dispatch) => {
    try {
        const { data: userData } = await api.signUp(formData);

        dispatch({ type: AUTH, data: userData });
        navigate("/");
    } catch (error) {
        console.error("Erreur lors de l'inscription :", error);
    }
};

export const signupGoogle = (accessToken, navigate) => async (dispatch) => {
    try {
        const { data: userData } = await api.signUpGoogle(accessToken);

        dispatch({ type: AUTH, data: userData });
        navigate("/");
    } catch (error) {
        console.error("Erreur lors de l'inscription avec Google :", error);
    }
};
