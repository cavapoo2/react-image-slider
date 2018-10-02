import React from 'react';
import PropTypes from 'prop-types';
const Button = ({text,handler}) => {
    return(
    <button onClick={handler}>{text}</button>
    );
}

Button.protoType = {
    text: PropTypes.string,
    handler:PropTypes.func,
}
export default Button;
