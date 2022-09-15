import './Buttons.scss';
// import {Button} from 'react-bootstrap';
import Image from '../image/Image';


const ButtonComponent = ({ size, variant, color, className, text,  iconSrc,   ...rest }) => {
  const classes =
    "button " +
    (variant || "") + " " + (className || "") + " " + (size || "");
  
  return (
    <button className={classes} {...rest} name={text}>
          {iconSrc ? (
            <Image className='me-2' src={iconSrc} alt="img" />
          ) : (
            ''
          )}
          {text}
    </button>
  );
};


export default ButtonComponent;
