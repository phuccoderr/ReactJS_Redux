import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const [state, setState] = useState({
    username: "",
    password: "",
    isLoginSucces: false,
  });
  const handleField = (e) => {
    const { name, value } = e.target;

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const isValidate = () => {
    let isValid = true;
    console.log(state);
    if (state.password === "" || state.username === "") {
      isValid = false;
      toast.error("Please enter field...");
    }
    return isValid;
  };
  const handleLogin = (e) => {
    e.preventDefault();
    if (isValidate()) {
      fetch("http://localhost:4000/users/" + state.username)
        .then((res) => {
          return res.json();
        })
        .then((resp) => {
          if (Object.keys(resp).length === 0) {
            toast.error("Please enter valid username");
          } else {
            if (resp.password === state.password) {
              toast.success("Login success");
              setState({ isLoginSucces: true });
              sessionStorage.setItem("username", state.username);
              let user = { username: resp.username, role: resp.role };
              sessionStorage.setItem("user", JSON.stringify(user));
            } else {
              toast.error("Please enter valid password");
            }
          }
        })
        .catch((error) => {
          toast.error("Login fail: " + error.message);
        });
    }
  };
  if (state.isLoginSucces === true) {
    return <Navigate to="/" replace={true} />;
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
              Login Now
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

                <Button
                  variant="primary"
                  type="submit"
                  onClick={(event) => handleLogin(event)}
                >
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
