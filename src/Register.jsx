import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

function Register() {
  const [state, setState] = useState({
    id: "",
    username: "",
    password: "",
    email: "",
    isRegisterSucces: false
  });

  const handleField = (e) => {
    const { name, value } = e.target;

    setState((prevState) => ({
      ...prevState,
      [name]: value
    }));
    
  };

  const isValidate = () => {
    let isValid = true;
    if (state.username === '' || state.email === '' || state.password === '') {
      isValid = false;
      toast.error("Please enter field...");
    }
    return isValid;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    
    if (isValidate()) {
      let user = {
        id: state.username,
        username: state.username,
        email: state.email,
        password: state.password,
      };
      console.log(user);
      fetch("http://localhost:4000/users",{
        method: 'POST',
        headers: {"content-type": "application/json"},
        body: JSON.stringify(user)
      }).then(res => {
        toast.success("Register success");
        setState(prevState => ({...prevState,isRegisterSucces: true}));
      }).catch(error => {
        toast.error("Failed: " + error.message);
      })
    }
  };
  if (state.isRegisterSucces === true) {
    return <Navigate to='/login' replace={true} />
  }
  return (
    <Container style={{ textAlign: "center" }}>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Card style={{ width: "35rem", marginTop: "100px" }}>
            <Card.Header
              as="h5"
              style={{ paddingTop: "20px", paddingBottom: "20px" }}
            >
              Register Now
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicUserName">
                  <Form.Label className="d-flex">User name</Form.Label>
                  <Form.Control
                    type="text"
                    value={state.username}
                    name="username"
                    placeholder="Enter username"
                    onChange={(e) => {
                      handleField(e);
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="d-flex">Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={state.password}
                    name="password"
                    onChange={(e) => {
                      handleField(e);
                    }}
                    placeholder="Password"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="d-flex">Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={state.email}
                    name="email"
                    onChange={(e) => {
                      handleField(e);
                    }}
                    placeholder="Enter email"
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  onClick={(event) => handleRegister(event)}
                >
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
