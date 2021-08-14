const root = document.getElementById("root");

class Timer extends React.Component {
    state = {
        count: 0,
    };

    componentDidMount = () => {
        this.interval = setInterval(() => {
            this.setState((prevState) => {
                return { count: prevState.count + 1 };
            });
        }, 1000);
    };

    componentWillUnmount = () => {
        clearInterval(this.interval);
        console.log("Interval has been cleared!");
    };

    render() {
        return <div>{this.state.count}</div>;
    }
}

class App extends React.Component {
    state = {
        showTimer: true,
    };

    render() {
        return (
            <div>
                {this.state.showTimer ? <Timer /> : <p>No Timer</p>}
                <button onClick={() => this.setState({ showTimer: false })}>
                    Hide Timer
                </button>
            </div>
        );
    }
}

ReactDOM.render(<App />, root);
