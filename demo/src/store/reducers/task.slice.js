import { TASK_LOADED } from "../actions/task.action";

const initState = {
    loading: true,
    tasks: [],
};

const taskReducer = (state = initState, action) => {
    switch (action.type) {
        case TASK_LOADED: {
            return {
                loading: false,
                tasks: action.payload,
            };
        }

        default: {
            return state;
        }
    }
};

export default taskReducer;
