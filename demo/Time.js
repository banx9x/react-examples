const root = document.getElementById("root");

class Time extends React.Component {
    getUTCTime() {
        let tz = this.props.timezone;

        let now = new Date();
        let offset = now.getTimezoneOffset();

        let UTC0 = new Date(now.getTime() + offset * 60 * 1000);

        let time = new Date(UTC0.getTime() + tz * 60 * 60 * 1000);

        return time;
    }

    render() {
        let time = this.getUTCTime();
        let tz = this.props.timezone;

        return (
            <p>
                Time UTC{tz}: {time.toLocaleString()}
            </p>
        );
    }
}

Time.propTypes = {
    timezone: PropTypes.number.isRequired,
};

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>My First React App</h1>
                <Time timezone={7} />
                <Time timezone={-4} />
                <Time timezone={0} />
            </div>
        );
    }
}

ReactDOM.render(<App />, root);
