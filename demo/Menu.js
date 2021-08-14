const root = document.getElementById("root");

const menu = [
    { href: "/", label: "Homepage" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/products", label: "Products" },
    { href: "/blogs", label: "Blog" },
    { href: "/more", label: "More" },
];

class MenuItem extends React.Component {
    render() {
        let { href } = this.props;

        return (
            <li className="menu__items">
                <a className="menu__links" href={href}>
                    {this.props.children}
                </a>
            </li>
        );
    }
}

class Menu extends React.Component {
    render() {
        const menuItems = menu.map((item, index) => (
            // Key sử dụng đúng vị trí
            <MenuItem key={index} href={item.href}>
                {item.label}
            </MenuItem>
        ));

        return <ul className="menu">{menuItems}</ul>;
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>My First React App</h1>
                <Menu />
            </div>
        );
    }
}

ReactDOM.render(<App />, root);
