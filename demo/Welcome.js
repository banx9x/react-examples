const root = document.getElementById("root");

const Welcome = ({ name }) => <p>Welcome, {name}</p>;

Welcome.propTypes = {
    name: PropTypes.string,
};

Welcome.defaultProps = {
    name: "Ba",
};

const App = () => {
    return (
        <div>
            <h1>My First React App</h1>
            <Welcome name="Ba" />
            <Welcome name="Béo Ú" />
            <Welcome />
        </div>
    );
};

ReactDOM.render(<App />, root);
