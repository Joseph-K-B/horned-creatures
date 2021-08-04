import React, { Component } from 'react';
// import images from './data.js';
import ImageItem from './ImageItem.js'

class ImageList extends Component {
    render() {
        const { images } = this.props
        return (
            <>
            {images.map((item) => {
                const{ keyword, url} = item;  
                return <ImageItem key={keyword} image={url} />
            })}
            </>
        );
    }
}

export default ImageList