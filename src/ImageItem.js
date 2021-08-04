import React, { Component } from 'react';

class ImageItem extends Component {
    state = {};
    render () {
        const { title , url } = this.props;
        return (
            <p>
                { title }
                <img
                alt={ title}
                width='100'
                src={ url } />
            </p>
        );
    }
}

export default ImageItem;