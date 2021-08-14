const root = document.getElementById("root");

class Parent extends React.Component {
    render() {
        return (
            <div>
                <h2>Hello Children!</h2>
                {this.props.children}
                {/* 
                    <p>Hello</p>
                    <p>Thử ...</p> 
                */}
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <Parent>
                <p>Hello</p>
                <p>Thử xem kết quả trên trình duyệt nhé</p>
            </Parent>
        );
    }
}

ReactDOM.render(<App />, root);

