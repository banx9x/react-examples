const root = document.getElementById("root");

class ControlledForm extends React.Component {
    state = {
        firstName: "",
        lastName: "",
    };

    handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

    handleSubmit = (e) => {
        e.preventDefault();

        let { firstName, lastName } = this.state;
        alert(`Welcome, ${firstName} ${lastName}!`);
    };

    render() {
        let { firstName, lastName } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <p>Tell me who you are?</p>

                <input
                    type="text"
                    placeholder="Your Firstname"
                    name="firstName"
                    value={firstName}
                    onChange={this.handleChange}
                />

                <input
                    type="text"
                    placeholder="Your Lastname"
                    name="lastName"
                    value={lastName}
                    onChange={this.handleChange}
                />

                <input type="submit" value="Submit" />
            </form>
        );
    }
}

class Controlled extends React.Component {
    state = { username: "", error: null };

    handleChange = (e) => {
        let value = e.target.value;

        this.setState({
            username: value.slice(0, 8),
            error: /[^a-zA-Z0-9]/gi.test(value),
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        if (this.state.username && !this.state.error)
            alert(`Hello, ${this.state.username}!`);
        else this.ref.focus();
    };

    render() {
        let error;

        if (this.state.error) error = <p>Only lowercase letters or numbers</p>;

        return (
            <div>
                <h1>Create your username (max 8 characters).</h1>

                <form onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleChange}
                        placeholder="Enter your username"
                        name="username"
                        value={this.state.username}
                        ref={(el) => (this.ref = el)}
                    />
                    <input type="submit" value="Submit" />

                    {error}
                </form>
            </div>
        );
    }
}

class UncontrolledForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();

        let firstName = this.firstName.value;
        let lastName = this.lastName.value;

        alert(`Welcome, ${firstName} ${lastName}!`);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <p>Tell me who you are?</p>

                <input
                    type="text"
                    placeholder="Your Firstname"
                    name="firstName"
                    ref={(el) => (this.firstName = el)}
                />

                <input
                    type="text"
                    placeholder="Your Lastname"
                    name="lastName"
                    ref={(el) => (this.lastName = el)}
                />

                <input type="submit" value="Submit" />
            </form>
        );
    }
}

ReactDOM.render(<UncontrolledForm />, root);
