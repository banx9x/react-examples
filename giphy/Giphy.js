import React, { Component } from "react";
import ReactDOM from "react-dom";
import ListGif from "./ListGif";
import SearchForm from "./SearchForm";

const KEY = "y552Ig0rBsEWCcvr10kYKLiEkmyHutLT";
const SEARCH_API =
    "https://api.giphy.com/v1/gifs/search?limit=1&api_key=" + KEY;

class GiphyApp extends Component {
    initState = {
        gifs: [],
        msg: "Enter keyword to search gif",
        query: "",
        history: {},
    };

    state = this.initState;

    handleChange = (e) => this.setState({ query: e.target.value });

    handleClear = () => {
        this.setState(this.initState);
        this.search.focus();
    };

    fetchGif = (query) => {
        const newHistory = { ...this.state.history };
        newHistory[query] = newHistory[query] + 1 || 0;

        let offset = newHistory[query];

        fetch(`${SEARCH_API}&q=${query}&offset=${offset}`)
            .then((res) => res.json())
            .then((res) => {
                if (res.data.length > 0) {
                    const data = res.data[0];

                    const newGifs = [
                        ...this.state.gifs,
                        { id: data.id, img: data.images.original },
                    ];

                    this.setState({
                        gifs: newGifs,
                        history: newHistory,
                        msg: this.initState.msg,
                        query: this.initState.query,
                    });
                } else {
                    this.setState({
                        msg: `No result for: '${query}'`,
                        query: this.initState.query,
                    });
                }

                this.search.focus();
            })
            .catch(console.log);
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const query = this.state.query
            .trim()
            .replace(/[\s+]{2,}/g, " ")
            .toLowerCase();

        if (query.length == 0) {
            this.search.focus();
            return;
        }

        this.fetchGif(query);
    };

    componentDidMount = () => {
        this.search.focus();
    };

    render() {
        return (
            <>
                <header className="header">
                    <div className="container">
                        <h1 className="heading">Giphy API</h1>

                        <SearchForm
                            handleSubmit={this.handleSubmit}
                            handleChange={this.handleChange}
                            handleClear={this.handleClear}
                            msg={this.state.msg}
                            value={this.state.query}
                            searchRef={(el) => (this.search = el)}
                            history={this.state.history}
                            fetchGif={this.fetchGif}
                        />
                    </div>
                </header>

                <div className="container">
                    <ListGif gifs={this.state.gifs} />
                </div>
            </>
        );
    }
}

ReactDOM.render(<GiphyApp />, document.getElementById("root"));
