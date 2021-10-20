const LikeButton = ({ id, status, handleLike }) => {
    const icon = status ? (
        <i className="bi bi-heart-fill" />
    ) : (
        <i className="bi bi-heart" />
    );

    return (
        <button onClick={() => handleLike(id)} className="btn btn-like">
            {icon}
        </button>
    );
};

const DeleteButton = ({ id, handleDelete }) => {
    return (
        <button onClick={() => handleDelete(id)} className="btn btn-delete">
            <i class="bi bi-x-lg"></i>
        </button>
    );
};

const Item = ({ image, handleLike, handleDelete }) => {
    return (
        <div className="item">
            <img src={image.url} />

            <div className="actions">
                <LikeButton
                    id={image.id}
                    status={image.like}
                    handleLike={handleLike}
                />
                <DeleteButton id={image.id} handleDelete={handleDelete} />
            </div>
        </div>
    );
};

const List = ({ images, handleLike, handleDelete }) => {
    return (
        <div className="list">
            <div className="row">
                {images.map((image, i) => (
                    <div key={i} className="col-3">
                        <Item
                            handleLike={handleLike}
                            handleDelete={handleDelete}
                            image={image}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

const FilterItem = ({ active, label, onChange }) => {
    return (
        <li class="nav-item">
            <a
                class={"nav-link " + (active ? "active" : "")}
                onClick={onChange}
            >
                {label}
            </a>
        </li>
    );
};

const Filter = ({ onChange, showFavourite }) => {
    return (
        <ul class="nav justify-content-end">
            <FilterItem
                active={!showFavourite}
                onChange={() => onChange(false)}
                label="All Pictures"
            />
            <FilterItem
                active={showFavourite}
                onChange={() => onChange(true)}
                label="Favourites"
            />
        </ul>
    );
};

class Form extends React.Component {
    state = {
        url: "",
    };

    handleChange = (value) => {
        this.setState({ url: value });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.handleAddPicture(this.state.url);
        this.setState({ url: "" });
        this.ref.focus();
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div class="mb-3 input-group">
                    <input
                        type="text"
                        class="form-control"
                        value={this.state.url}
                        onChange={(e) => this.handleChange(e.target.value)}
                        ref={(node) => (this.ref = node)}
                    />
                    <button type="submit" class="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>
        );
    }
}

class App extends React.Component {
    state = {
        id: 5,
        showFavourite: false,
        images: [
            {
                id: 1,
                url: "https://newsmd1fr.keeng.net/netnews/archive/images/2019122617/tinngan_052713_909620546_1.jpg",
                like: false,
            },
            {
                id: 2,
                url: "https://image-us.24h.com.vn/upload/2-2021/images/2021-05-31/anh-4-1622435533-350-width650height813.jpg",
                like: true,
            },
            {
                id: 3,
                url: "https://sohanews.sohacdn.com/2019/9/3/photo-1-15674713690051885929813.jpg",
                like: false,
            },
            {
                id: 4,
                url: "https://kenh14cdn.com/203336854389633024/2021/5/7/photo-1-1620357519578885309410.jpg",
                like: false,
            },
        ],
    };

    handleLike = (id) => {
        this.setState((prev) => {
            const images = [...prev.images];

            const item = images.findIndex((image) => image.id === id);
            const newImage = { ...images[item] };

            newImage.like = !newImage.like;
            images.splice(item, 1, newImage);

            return {
                ...prev,
                images,
            };
        });
    };

    handleDelete = (id) => {
        this.setState((prev) => {
            const newImages = prev.images.filter((image) => image.id !== id);

            return {
                ...prev,
                images: newImages,
            };
        });
    };

    handleShowFavoriteChange = (status) => {
        this.setState((prev) => {
            return {
                ...prev,
                showFavourite: status,
            };
        });
    };

    handleAddPicture = (url) => {
        if (!url.trim()) return;

        this.setState((prev) => {
            const images = [
                ...prev.images,
                {
                    id: prev.id,
                    url,
                    like: false,
                },
            ];

            return {
                ...prev,
                id: prev.id + 1,
                images,
            };
        });
    };

    render() {
        const images = this.state.showFavourite
            ? this.state.images.filter((image) => image.like)
            : this.state.images;

        return (
            <div className="gallery-app">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="app-heading text-center">
                                My Gallery
                            </h1>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-5">
                            <Form handleAddPicture={this.handleAddPicture} />
                        </div>
                    </div>

                    <div className="row justify-content-end">
                        <div className="col">
                            <Filter
                                showFavourite={this.state.showFavourite}
                                onChange={this.handleShowFavoriteChange}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <List
                                handleLike={this.handleLike}
                                handleDelete={this.handleDelete}
                                images={images}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
