import React, { Component } from "react";
import Isotope from "isotope-layout";
import Gif from "./Gif";

class ListGif extends Component {
    componentDidMount = () => {
        this.isotope = new Isotope(this.gridRef, {
            itemSelector: ".gif",
            masonry: {
                columnWidth: ".grid-sizer",
                gutter: ".grid-gutter",
            },
        });
    };

    setGridHeight = () => {
        let height = this.newRef.offsetTop + this.newRef.offsetHeight + 10;
        let current = this.gridRef.offsetHeight;

        // if (current - 10 < height) this.gridRef.style.height = height + "px";
        if (current - 10 < height) this.isotope.layout();

        this.gridRef.scrollIntoView(false);
    };

    shouldComponentUpdate = (nextProps) =>
        nextProps.gifs.length != this.props.gifs.length;

    componentDidUpdate = () => {
        if (this.newRef) {
            this.isotope.appended(this.newRef);
        }
    };

    render() {
        const gifs = this.props.gifs.map((gif, index) => {
            let newRef = null;
            let setGridHeight = null;
            if (index == this.props.gifs.length - 1) {
                newRef = (el) => (this.newRef = el);
                setGridHeight = this.setGridHeight;
            }

            return (
                <Gif
                    newRef={newRef}
                    setGridHeight={setGridHeight}
                    key={gif.id}
                    img={gif.img}
                />
            );
        });

        return (
            <div ref={(el) => (this.gridRef = el)} className="list-gifs">
                <div className="grid-sizer"></div>
                <div className="grid-gutter"></div>
                {gifs}
            </div>
        );
    }
}

export default ListGif;
