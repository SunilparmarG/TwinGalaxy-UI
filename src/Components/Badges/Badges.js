import "./Badges.scss";
import PropTypes from "prop-types";
import Image from '../image/Image'

/**
 * Name: Badges
 * Desc: Render Badges
 * @param {string} text
 * @param {string} className 
 */
const Badges = (props) => {
  const {className, badgeText,iconSrc, ...rest } = props;
  const name = `${className || ""}${"badges"}`; 
  return (
    <>
      <div className={name} {...rest}>
        <span className="d-flex justify-content-center">
        {iconSrc ? (
        <Image src={iconSrc} className="me-1 img-fluid" alt="img" />
      ) : (
        ''
      )}
        
        {badgeText}
        </span>
            
      </div>
    </>
  );
};

// 

export default Badges;

//how to use
/*
import Badges from '../../components/Badges/Badges';
<Badges
    badgeText="New Property "
    className="badges primary"
/>
*/
