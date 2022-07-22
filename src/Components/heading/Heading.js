import PropTypes from 'prop-types';
import './Heading.scss';

//  * Name: Heading
//  * Desc: Render heading
//  * @param {string} type
//  * @param {string,element} text
//  * @param {string} color

const Heading = (props) => {
  const { size, color, fontWeight, className, typeofHeading, ...rest } = props
  const name = `${size || 'heading'} ${color || 'primaryColor'} ${fontWeight || 'semibold'} ${className || ''}`;
  const H1 = ({ text, ...rest }) => (<h1 {...rest}>{text}</h1>)
  const H2 = ({ text, ...rest }) => (<h2 {...rest}>{text} </h2>)
  const H3 = ({ text, ...rest }) => (<h3 {...rest}>{text} </h3>)
  const H4 = ({ text, ...rest }) => (<h4 {...rest}>{text} </h4>)
  const H5 = ({ text, ...rest }) => (<h5 {...rest}>{text} </h5>)
  const H6 = ({ text, ...rest }) => (<h6 {...rest}>{text} </h6>)
  
  const renderSwitch = () => {
    let params = { ...rest, className: name }
    switch (typeofHeading) {
      case 'h1':
        return <H1 {...params} />;
      case 'h2':
        return <H2 {...params} />;
      case 'h3':
        return <H3 {...params} />;
      case 'h4':
        return <H4 {...params} />;
      case 'h5':
        return <H5 {...params} />;
      case 'h6':
        return <H6 {...params} />;

      default:
        return '';
    }
  }

  return (
    <>
      {renderSwitch()}
    </>

  );

}

Heading.propTypes = {
  size: PropTypes.string.isRequired,
  fontWeight: PropTypes.string.isRequired,
  typeofHeading: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  color: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Heading;
