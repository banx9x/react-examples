const root = document.getElementById("root");

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            count: 1,
        };

        setInterval(this.increaseCount, 1000);
    }

    increaseCount = () => {
        this.setState(
            // Hàm updater, nhận 2 tham số là phiên bản state trước đó và props
            (prevState, props) => {
                return { count: prevState.count + 1 };
            },
            // Hàm callback gọi sau khi sate được cập nhật
            () => {
                console.log(this.state.count);
            }
        );
    };

    render() {
        return <p>Count: {this.state.count}</p>;
    }
}

ReactDOM.render(<App />, root);
