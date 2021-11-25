import { SET_CURRENT_USER, SIGNIN_REQUESTED } from "../actions/auth.action";

const initState = {
    loading: true,
    user: null,
    error: null,
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER: {
            return {
                loading: false,
                user: action.payload,
                error: action.error,
            };
        }

        case SIGNIN_REQUESTED: {
            return {
                loading: true,
                user: null,
                error: null,
            };
        }

        default: {
            return state;
        }
    }
};

export default authReducer;
