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
      <span className={name} {...rest}>
      {iconSrc ? (
        <Image src={iconSrc} className="me-2 img-fluid" alt="img" />
      ) : (
        ''
      )}
        
        {badgeText}      
      </span>
    </>
  );
};

Text.propTypes = { 
  className: PropTypes.string,
  text: PropTypes.string,
  isRequired: PropTypes.bool,
};

export default Badges;

//how to use
/*
import Badges from '../../components/Badges/Badges';
<Badges
    badgeText="New Property "
    class="badges primaryBadge"
/>
*/
