import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import './Search.scss';
import Input from '../Input/Input';
import Image from '../image/Image';
import { InputGroup } from 'react-bootstrap';
import SearchIcon from "../../assets/images/svg/search.svg";
const SearchComponent = (props) => {
  return (
    <div className="inputFeild search-input">  
      <InputGroup className="mb-4">
        <Form.Control
          type={props.type}
          placeholder={props.placeholder}
          className={props.className}
          onChange={props.handleOnChange}
          onBlur={props.handleOnBlur}
        />
        <InputGroup.Text id="basic-addon2"><Image src={SearchIcon} name="Search" className="img-fluid" /></InputGroup.Text>     
      </InputGroup>
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  iconSrc: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  handleOnChange: PropTypes.func,
  handleOnBlur: PropTypes.func,
  handleOnKeyPress: PropTypes.func,
};
export default SearchComponent;
