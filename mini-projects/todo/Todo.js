const root = document.getElementById("root");

const TodoItem = ({ id, title, handleChange }) => {
    return (
        <li className="todo-item">
            {title}
            <button onClick={() => handleChange(id)}>Done #{id}</button>
        </li>
    );
};

const TodoList = ({ todos, handleChange }) => {
    const items = todos.map((todo) => (
        <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            handleChange={handleChange}
        />
    ));

    return <ul className="todo-list">{items}</ul>;
};

class App extends React.Component {
    state = {
        todos: [
            { id: 1, title: "Task #1" },
            { id: 2, title: "Task #2" },
        ],
    };

    handleChange = (id) => {
        this.setState((prevState) => {
            let todos = prevState.todos.slice();
            let newTodos = todos.filter((todo) => todo.id !== id);

            return { todos: newTodos };
        });
    };

    render() {
        return (
            <div>
                <h1>Todo Lists</h1>
                <TodoList
                    todos={this.state.todos}
                    handleChange={this.handleChange}
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, root);
