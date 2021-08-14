const root = document.getElementById("root");

const Form = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        console.log("Submit Event");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" />
        </form>
    );
};

const Button = (props) => {
    let { handleClick, count } = props;

    return <button onClick={handleClick}>Add #{count}</button>;
};

const Data = (props) => {
    let { data } = props;

    return <p>{data.join(" ")}</p>;
};

class App extends React.Component {
    state = {
        count: 0,
        data: [],
    };

    handleChange = () => {
        this.setState((prevState) => {
            let newData = prevState.data.slice();
            let newCount = prevState.count + 1;

            newData.push(newCount);

            return { count: newCount, data: newData };
        });
    };

    render() {
        let { count, data } = this.state;

        return (
            <div>
                <Data data={data} />
                <Button handleClick={this.handleChange} count={count} />

                <Form />
            </div>
        );
    }
}

ReactDOM.render(<App />, root);
