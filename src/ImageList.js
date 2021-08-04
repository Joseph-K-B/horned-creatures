import React, { Component } from 'react';
// import images from './data.js';
import ImageItem from './ImageItem.js'

class ImageList extends Component {
    render() {
        const { images } = this.props
        return (
            <>
            {images.map((item) => { 
                return <ImageItem key={item.url} keyword={item.keyword} name={item.title} url={item.url} />
            })}
            </>
        );
    }
}

export default ImageList