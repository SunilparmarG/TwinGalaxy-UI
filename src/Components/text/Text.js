import React from 'react';
import PropTypes from 'prop-types';
import './Text.scss';
/**
 * Name: Text
 * Desc: Render Text
 * @param {string} text
 * @param {string} className
 * @param {string} color
 * @param {string} fontWeight
 * @param {string} fontSize
 * @param {object} style
 */

const Text = (props) => {
  const { size, color, fontWeight, className, ...rest } = props;
  const name = `${size || ''} ${color || ''} ${fontWeight || ''} ${
    className || ''
  } ${'text'} `;
  return (
    <React.Fragment>
      <span className={name} {...rest}>
        {props.text}
      </span>
    </React.Fragment>
  );
};

Text.propTypes = {
  size: PropTypes.string.isRequired,
  fontWeight: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
};
export default Text;
