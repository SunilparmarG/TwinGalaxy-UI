import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Input from "../../Component/Input/Input";
import '../Login/Login.scss';

const Login = () => {
  return (
    <div className='loginWrapper d-flex justify-content-center align-items-top pt-5'>
       <Container>
      <Row>
        <Col>
        <Input type="text" id="loginID" labelValue="abc" placeholder="john.doe@gmail.com" className="my-5" />
        </Col>
      </Row>
    </Container>
</div>
  )
}

export default Login