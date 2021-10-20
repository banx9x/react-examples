const defaultValue = {};

const CounterContext = React.createContext(defaultValue);
CounterContext.displayName = "CounterContext";

const Button = ({ onClick, children }) => {
    return <button onClick={onClick}>{children}</button>;
};

const Controls = () => {
    const { Consumer } = CounterContext;

    return (
        <Consumer>
            {({ increment, decrement }) => {
                return (
                    <div>
                        <Button onClick={increment}>Up</Button>
                        <Button onClick={decrement}>Down</Button>
                    </div>
                );
            }}
        </Consumer>
    );
};

class App extends React.Component {
    state = {
        count: 0,
    };

    increment = () => this.setState({ count: this.state.count + 1 });
    decrement = () => this.setState({ count: this.state.count - 1 });

    render() {
        
        const { Provider, Consumer } = CounterContext;

        return (
            <Provider
                value={{
                    count: this.state.count,
                    increment: this.increment,
                    decrement: this.decrement,
                }}
            >
                <div>
                    <Consumer>{({ count }) => <h1>{count}</h1>}</Consumer>

                    <Controls />
                </div>
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
