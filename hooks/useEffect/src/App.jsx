import React, { useEffect, useState, useRef } from "react";

const App = () => {
    const [hits, setHits] = useState([]);

    useEffect(async () => {
        console.log("Fetching");

        const res = await fetch(
            "https://hn.algolia.com/api/v1/search?query=useEffect"
        );
        const data = await res.json();
        setHits(data.hits);
    }, [setHits]); // <- thêm setHits vào dependencies

    return (
        <ul>
            {hits.map((item) => (
                <li key={item.objectID}>
                    <a href={item.url}>{item.title}</a>
                </li>
            ))}
        </ul>
    );
};

export default App;
