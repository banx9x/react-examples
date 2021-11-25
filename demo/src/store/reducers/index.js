import { combineReducers } from "redux";
import authReducer from "./auth.slice";
import taskReducer from "./task.slice";

const rootReducer = combineReducers({
    auth: authReducer,
    task: taskReducer,
});

export default rootReducer;
