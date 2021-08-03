import React, { Component } from 'react';
// import images from './data.js';
import ImageItem from './ImageItem.js'

class ImageList extends Component {
    render() {
        return (
            <>
            {this.props.words.map((item) => {
                return <ImageItem key={item.title} image={item} />
            })}
            </>
        );
    }
}

export default ImageList