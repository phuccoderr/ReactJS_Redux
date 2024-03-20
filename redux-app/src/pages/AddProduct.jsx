import React, { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { createProduct } from "../action/products/productAction";
import { Navigate } from "react-router-dom";

function AddProduct(props) {
  const [state, setState] = useState({
    name: "",
    price: 0,
    content: "",
    status: "",
  });

  const handleSaveProduct = (e) => {
    e.preventDefault();
    console.log(state)
    let isValid = checkValidate();
    if (isValid === false) {
        alert("invalid field products");
        return 
    }
    // fire action
    props.createProduct({
      id: 8,
      name: state.name,
      price: state.price,
      content: state.content,
      status: state.status
    })
  };
  const checkValidate = () => {
    let isValid = true;
    if ( !state.name || !state.price || !state.content || !state.status ) {
        isValid = false;
    }
    return isValid;
  };
  return (
    <Container>
      <Row>
        <Col>
          <h1>Create new product</h1>
        </Col>
      </Row>
      <br />
      <Form>
        <Form.Group as={Row} controlId="formProductName" className="mb-3">
          <Form.Label column sm={2}>
            Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Enter product's name "
              value={state.name}
              onChange={(e) => setState(prev => ({...prev, name: e.target.value}))}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formProductPrice" className="mb-3">
          <Form.Label column sm={2}>
            Price
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="number"
              placeholder="Enter product's price "
              value={state.price}
              onChange={(e) => setState(prev => ({...prev, price: e.target.value}))}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formProductContent" className="mb-3">
          <Form.Label column sm={2}>
            Content
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Enter product's content "
              value={state.content}
              onChange={(e) => setState(prev => ({...prev, content: e.target.value}))}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formProductStatus" className="mb-3">
          <Form.Label column sm={2}>
            Status
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Enter product's status "
              value={state.status}
              onChange={(e) => setState(prev => ({...prev, status: e.target.value}))}
            />
          </Col>
        </Form.Group>

        <Button type="submit" onClick={handleSaveProduct}>
          Save
        </Button>
      </Form>
      {props.createSuccess === true && (
        <Navigate to="/manage-product" replace={true} />
      )}

      {props.createSuccess === false && props.createErrorMsg && (
        <Alert variant="danger">
          <div>Create Error: {props.createErrorMsg}</div>
        </Alert>
      )}
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    createSuccess: state.productReducer.createSuccess,
    createErrorMsg: state.productReducer.createErrorMsg,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createProduct: (product) => dispatch(createProduct(product)),
  };
};

export default connect(mapStateToProps,mapDispatchToProps) (AddProduct);
