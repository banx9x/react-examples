const root = document.getElementById("root");

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            a: ["one"],
            b: ["one"],
        };

        setTimeout(this.changeState, 1000);
    }

    changeState = () => {
        this.setState((prevState, props) => {
            let newA = [...prevState.a, "two"];

            return { a: newA };
        });
    };

    render() {
        let { a, b } = this.state;

        return (
            <div>
                <p>{a}</p>
                <p>{b}</p>
            </div>
        );
    }
}

ReactDOM.render(<App />, root);

changeState = () => {
    this.setState((prevState, props) => {
        let newA = [...prevState.a, "two"];

        return { a: newA };
    });
};