import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "../../assets/images/svg/logo.svg";
import Switch from '../../Components/switch/Switch';
import './Header.scss';

function NavScrollExample() {
  return (
    <Navbar bg="white" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <img src={Logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 text-col2 fw600 fs-18"
            navbarScroll
          >
            <Nav.Link href="#action1" className='active text-col1 me-35'>Home</Nav.Link>
            <Nav.Link href="#action2" className=' me-35'>Wall</Nav.Link>
            <Nav.Link href="#action3" className=' me-35'>News</Nav.Link>
            <NavDropdown title="TG Records" id="navbarRecords" className=' me-35'>
              <NavDropdown.Item href="#action4">TG Record 1</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">TG Record 2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action6">TG Record 3</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Community" id="navbarCommunity">
              <NavDropdown.Item href="#action7">Community 1</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action8">Community 2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action9">Community 3</NavDropdown.Item>
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