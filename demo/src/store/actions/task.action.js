import { task } from "../../services";

export const TASK_LOADED = "task/loaded";
export const taskLoaded = (task) => ({ type: TASK_LOADED, payload: task });

export const loadTasks = () => {
    return (dispatch) =>
        task.getTasks().then((tasks) => dispatch(taskLoaded(tasks)));
};
