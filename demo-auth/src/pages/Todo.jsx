import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router";
import { loadTasks, userLogout } from "../store/actions";

const BASE = "https://bnx-todo.herokuapp.com";

const Todo = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);

    useEffect(() => {
        dispatch(loadTasks());
    }, [dispatch]);

    const { loading, tasks } = useSelector((state) => state.task);

    if (!user) {
        return <Navigate to="signin" />;
    }

    return (
        <div>
            <h1>Welcome {user.firstname + " " + user.lastname}!</h1>
            <img
                src={BASE + user.avatar}
                alt={user.firstname + " " + user.lastname}
            />
            <button onClick={() => dispatch(userLogout())}>Logout</button>

            {loading ? (
                <p>Loading...</p>
            ) : (
                tasks.map((task) => <div key={task.id}>{task.title}</div>)
            )}
        </div>
    );
};

export default Todo;
