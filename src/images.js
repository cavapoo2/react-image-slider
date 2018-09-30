import React from 'react';
import PropTypes from 'prop-types';
//import './Button.css';
import Image from './image';
const Images = ({images}) => {
    let k=0;
    let imgs = images.map((v) => {
        return (
            <Image key={k++} src={v.src} alt={v.alt}/>
        );
    });
    return <div>{imgs}</div>;
}

Images.protoType = { 
    images: PropTypes.arrayOf(PropTypes.string),
}
export default Images;