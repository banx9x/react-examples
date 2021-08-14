const root = document.getElementById("root");

const Post = ({ post: { title, body } }) => {
    return (
        <div className="post">
            <h3 className="post-title">{title}</h3>
            <p className="post-body">{body}</p>
        </div>
    );
};

class PostList extends React.Component {
    state = {
        posts: [],
    };

    componentDidMount = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((posts) => this.setState({ posts }));
    };

    render() {
        const posts = this.state.posts;

        let items = "There are no posts yet";

        if (posts.length > 0)
            items = posts.map((p) => <Post key={p.id} post={p} />);

        return <div className="post-list">{items}</div>;
    }
}

ReactDOM.render(<PostList />, root);
