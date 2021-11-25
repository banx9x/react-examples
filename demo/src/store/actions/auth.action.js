import { auth } from "../../services";

export const SET_CURRENT_USER = "auth/setCurrentUser";

export const SIGNIN_REQUESTED = "auth/signinRequested";
export const SIGNUP_REQUESTED = "auth/signupRequested";

export const setCurrentUser = (user, error) => ({
    type: SET_CURRENT_USER,
    payload: user,
    error,
});

export const signinRequested = () => ({ type: SIGNIN_REQUESTED });
export const signupRequested = () => ({ type: SIGNUP_REQUESTED });

export const getCurrentUser = () => {
    return (dispatch) => {
        auth.getUserInfo()
            .then((user) => dispatch(setCurrentUser(user)))
            .catch((error) => dispatch(setCurrentUser(null, error)));
    };
};

export const userSignin = (username, password) => {
    return (dispatch) => {
        dispatch(signinRequested());

        auth.userSignin(username, password)
            .then((user) => dispatch(setCurrentUser(user)))
            .catch((error) => dispatch(setCurrentUser(null, error)));
    };
};

export const userLogout = () => {
    return (dispatch) => {
        localStorage.removeItem("token");
        dispatch(setCurrentUser(null));
    };
};
