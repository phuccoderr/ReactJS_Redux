import React, { useEffect, useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { withRouter } from "../components/HOC/withRouter";
import { connect } from "react-redux";
import { compose } from "redux";
import { fetchProduct, updateProduct } from "../action/products/productAction";
import { Navigate } from "react-router-dom";

function UpdateProduct(props) {
  const [state, setState] = useState({
    id: "",
    name: "",
    price: 0,
    content: "",
    status: "",
  });
  useEffect(() => {
    let id = props.params.productId;
    props.fetchProduct(id);
  }, []);

  useEffect(() => {
    if (props.product) {
      setState({
        id: props.product.id,
        name: props.product.name,
        price: props.product.price,
        content: props.product.content,
        status: props.product.status,
      });
    }
  }, [props.product]);

  const handleSaveProduct = (e) => {
    console.log(state);
    console.log(props.product);

    const stateString = JSON.stringify(state);
    const productString = JSON.stringify(props.product);

    if (stateString !== productString) {
      let isValid = checkValidate();
      if (isValid === false) {
        alert("invalid field products");
        return;
      }
      props.updateProduct({
        id: state.id,
        name: state.name,
        price: state.price,
        content: state.content,
        status: state.status,
      });
    }
  };

  const checkValidate = () => {
    let isValid = true;
    if (!state.name || !state.price || !state.content || !state.status) {
      isValid = false;
    }
    return isValid;
  };

  if (props.loading === true) {
    return <div>Loading Data...</div>;
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1>Update product</h1>
        </Col>
      </Row>
      <br />
      {state && (
        <Form>
          <Form.Group as={Row} controlId="formProductId" className="mb-3">
            <Form.Label column sm={2}>
              Id
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" value={state.id} disabled />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formProductName" className="mb-3">
            <Form.Label column sm={2}>
              Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Enter product's name "
                value={state.name}
                onChange={(e) =>
                  setState((prev) => ({ ...prev, name: e.target.value }))
                }
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
                onChange={(e) =>
                  setState((prev) => ({ ...prev, price: e.target.value }))
                }
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
                onChange={(e) =>
                  setState((prev) => ({ ...prev, content: e.target.value }))
                }
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
                onChange={(e) =>
                  setState((prev) => ({ ...prev, status: e.target.value }))
                }
              />
            </Col>
          </Form.Group>

          <Button type="button" onClick={handleSaveProduct}>
            Save
          </Button>
        </Form>
      )}
      {props.updateSuccess === true && (
        <Navigate to="/manage-product" replace={true} />
      )}

      {props.updateSuccess === false && props.updateErrorMsg && (
        <Alert variant="danger">
          <div>Update Error: {props.updateErrorMsg}</div>
        </Alert>
      )}
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.productReducer.loading,
    product: state.productReducer.product,
    updateSuccess: state.productReducer.updateSuccess,
    updateErrorMsg: state.productReducer.updateErrorMsg,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProduct: (id) => dispatch(fetchProduct(id)),
    updateProduct: (product) => dispatch(updateProduct(product)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(UpdateProduct);
