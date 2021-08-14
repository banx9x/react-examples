const root = document.getElementById("root");

class THead extends React.Component {
    render() {
        return (
            <thead>
                <tr>
                    <th style={{ textAlign: "left" }}>Name</th>
                    <th style={{ textAlign: "left" }}>Job</th>
                </tr>
            </thead>
        );
    }
}

class TBody extends React.Component {
    render() {
        return <tbody>{this.props.children}</tbody>;
    }
}

class Row extends React.Component {
    render() {
        let { name, job } = this.props;

        return (
            <tr>
                <td style={{ width: "100px" }}>{name}</td>
                <td>{job}</td>
            </tr>
        );
    }
}

class Table extends React.Component {
    render() {
        return (
            <table>
                <THead />

                <TBody>
                    <Row name="Ba" job="Developer" />
                    <Row name="Phoebe" job="Data Scientist" />
                    <Row name="Brian" job="Teacher" />
                </TBody>
            </table>
        );
    }
}

ReactDOM.render(<Table />, root);
