import React from "react";
import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button,Card,Form } from 'react-bootstrap';


export default function Login_form() {
  return (
    <div >
      

      <Card style={{ width: '28rem',margin:'3rem auto',borderRadius:'3px' }} >
  <Card.Img variant="top" style={{ width: '74px',margin:'10px auto' }} src="https://img-premium.flaticon.com/png/512/3899/premium/3899618.png?token=exp=1624451686~hmac=9c93c38d241c561fb2cfe9788a58dbb9" />
  <Card.Body>
    <Card.Title className="text-center mb-3">Welcome To Portal</Card.Title>
    

    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button  id="Login_btn" size="lg" block>
        LOGIN
      </Button>
    </Form>


  </Card.Body>
</Card>











    </div>
  );
}
