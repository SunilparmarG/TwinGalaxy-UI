import { NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "../../assets/images/svg/logo.svg";
import Image from '../../Components/image/Image';
import Switch from '../../Components/switch/Switch';
import './Header.scss'; 

function NavScrollExample() {
  return (
    <Navbar bg="white" expand="lg">
      <Container>
        <Navbar.Brand href="/">  
          <Image src={Logo} name="Twin Galaxies" title='Welcome to Twin Galaxies' className='img-fluid' />                
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" /> 
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 text-col2 fw600 fs-18"
            navbarScroll
          >
            <Nav.Link to="/" className='active text-col1'>Home</Nav.Link>
            <Nav.Link to="#">Wall</Nav.Link>
            <Nav.Link to="#">News</Nav.Link>
            <NavDropdown title="TG Records" id="navbarRecords">
              <NavDropdown.Item to="#">TG Record 1</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item to="#">TG Record 2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item to="#">TG Record 3</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Community" id="navbarCommunity">
              <NavDropdown.Item to="#">Community 1</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item to="#">Community 2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item to="#">Community 3</NavDropdown.Item>
            </NavDropdown>
            {/* <li>
              <Switch />
            </li> */}
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;