const todos = [
    { id: 1, title: "LoL", completed: true },
    { id: 2, title: "Pussy", completed: false },
];

const TodoItem = (props) => {
    const { id, title, completed } = props.todo;

    return (
        <li className={`todo-item ${completed ? "completed" : ""}`}>
            {title}

            {!completed && (
                <button onClick={() => props.handleUpdate(id)}>Done</button>
            )}
        </li>
    );
};

ReactDOM.render(
    <>
        {todos.map((t) => (
            <TodoItem todo={t} handleUpdate={() => {}} />
        ))}{" "}
    </>,
    document.getElementById("root")
);
