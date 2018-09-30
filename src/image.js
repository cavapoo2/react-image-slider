import React from 'react';
import PropTypes from 'prop-types';
//import './Button.css';
const Image = ({src,alt}) => {
    return(
    <img src={src} alt={alt} />
    );
}

Image.protoType = {
    src: PropTypes.string,
    image:PropTypes.string,
    alt:PropTypes.string,
}
export default Image;