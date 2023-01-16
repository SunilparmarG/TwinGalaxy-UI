import "./Badges.scss";
import PropTypes from "prop-types";
import Image from '../image/Image'

/**
 * Name: BadgesStatus
 * Desc: Render BadgesStatus
 * @param {string} text
 * @param {string} className 
 */
const BadgesStatus = (props) => {
  const {className, text, variant, iconSrc, ...rest } = props;
  const name = `${"badges-status"} ${variant || ""} ${className || ""}`; 
  return (
    <>
      <div className={name} {...rest}>
        <span className="d-flex justify-content-center">
        {iconSrc ? (
        <Image src={iconSrc} className="me-1 img-fluid" alt="img" />
      ) : (
        ''
      )}
        
        {text}
        </span>
            
      </div>
    </>
  );
};

// 

export default BadgesStatus;

//how to use
/*
import Badges from '../../components/Badges/Badges';
<Badges
    badgeText="New Property "
    className="badges primary"
/>
*/
