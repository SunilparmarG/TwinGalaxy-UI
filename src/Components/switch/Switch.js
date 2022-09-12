import './Switch.scss';

import PropTypes from 'prop-types';




const Switch = ({
  id,
  checkedLabel,
  unCheckedLabel,
  label,
  ...rest
}) => {


  return (

    <label class="switch btn-color-mode-switch">
      <input type="checkbox" name={id} id={id} value="1" />
      <label for={id} data-on="Dark" data-off="Light" class="btn-color-mode-switch-inner"></label>
    </label>
  );
};

Switch.propTypes = {
  checkedLabel: PropTypes.string,
  unCheckedLabel: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
};

export default Switch;
