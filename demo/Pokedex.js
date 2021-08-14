const root = document.getElementById("root");

class Pokecard extends React.Component {
    render() {
        let { name, type, image } = this.props;

        return (
            <div className="poke-card">
                <h3 className="poke-name">{name}</h3>
                <img className="poke-image" src={image} alt={name} />
                <p className="type">Type: {type}</p>
            </div>
        );
    }
}

class Pokedex extends React.Component {
    render() {
        let pokemons = this.props.pokemons;

        let pokeCards = pokemons.map((pokemon) => (
            <Pokecard key={pokemon.id} {...pokemon} />
        ));

        return <div className="poke-dex">{pokeCards}</div>;
    }
}

Pokedex.defaultProps = {
    pokemons: [
        {
            id: 1,
            name: "Charmander",
            type: "fire",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        },
        {
            id: 2,
            name: "Squirtle",
            type: "water",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
        },
        {
            id: 3,
            name: "Butterfree",
            type: "flying",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
        },
        {
            id: 4,
            name: "Rattata",
            type: "normal",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
        },
        {
            id: 5,
            name: "Metapod",
            type: "bug",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
        },
    ],
};

ReactDOM.render(<Pokedex />, root);
