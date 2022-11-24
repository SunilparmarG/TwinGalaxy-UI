import React from 'react';
import PropTypes from 'prop-types';
import './Image.scss';

/**
 * Name:Image
 * Desc: Render image
 * @param {string} src
 * @param {string} name
 * @param {string} className
 * @param {string} alt
 */

const Image = ({ src, name, className = '', alt, ...rest }) => {

  return (
    
      <img
        src={src}
        name={name}
        className={className}
        alt={alt || name || "Twin_Galaxy_Image"}
        {...rest}
      />
    
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string,
  className: PropTypes.string,
  alt: PropTypes.string,
};

export default Image;
