const root = document.getElementById("root");

class TodoItem extends React.Component {
    render() {
        let { title } = this.props;

        return <li>{title}</li>;
    }
}

class TodoList extends React.Component {
    render() {
        let { todos } = this.props;

        let todoItems = todos.map((todo) => (
            <TodoItem key={todo.id} title={todo.title} />
        ));

        return <ul>{todoItems}</ul>;
    }
}

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            todos: [
                { id: 1, title: "Task 1" },
                { id: 2, title: "Task 2" },
            ],
        };
    }

    render() {
        let { todos } = this.state;

        return (
            <div>
                <p>Todo list</p>
                <TodoList todos={todos} />
            </div>
        );
    }
}

ReactDOM.render(<App />, root);

