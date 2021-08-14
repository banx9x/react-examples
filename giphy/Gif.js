import React from "react";

const Gif = (props) => {
    return (
        <div ref={props.newRef} className="gif">
            <img
                className="gif-image"
                src={props.img.url}
                alt={props.img.title}
                onLoad={props.newRef ? props.setGridHeight : null}
            />
        </div>
    );
};

export default Gif;
