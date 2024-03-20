import React, { useEffect, useState } from "react";
import { FaBriefcase, FaHome } from "react-icons/fa";
import "./products.scss";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { connect } from "react-redux";
import {
  deleteProduct,
  fetchProducts,
  fetchProductsBySearch,
  fetchProductsByStatus,
} from "../action/products/productAction";
import ProductList from "../components/ProductList";
import { Link } from "react-router-dom";

function Products(props) {
  const [keyword, setKeyword] = useState("");
  const [status, setStatus] = useState("all");

  const handleShowByStatus = (newStatus) => {
    setStatus(newStatus);
    console.log(status);
  };

  const handleSearch = (keyword) => {
    props.fetchProductsBySearch(keyword);
  };

  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (status === "all") {
      props.fetchProducts();
    } else {
      props.fetchProductsByStatus(status);
    }
  }, [status]);

  useEffect(() => {
    if (props.products !== undefined) {
      setProducts(props.products);
    }
  }, [props.products]);

  return (
    <div>
      <div className="navigation">
        <ul>
          <li>
            <a href="#home">
              <span className="icon">
                <FaHome style={{ fontSize: "22px" }} />
              </span>
              <span className="menu-title">Admin</span>
            </a>
          </li>
          <li>
            <a href="#manage-products">
              <span className="icon">
                <FaBriefcase style={{ fontSize: "22px" }} />
              </span>
              <span className="menu-title">Product</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="main-content">
        <Row>
          <h1 className="title">Product Management</h1>
        </Row>
        <Row>
          <Col className="d-flex flex-row-reverse">
            <Link to="/add-product">
              <Button variant="info">Add new Product</Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              variant="primary"
              onClick={() => {
                handleShowByStatus("all");
              }}
            >
              All
            </Button>{" "}
            <Button
              variant="success"
              onClick={() => {
                handleShowByStatus("new");
              }}
            >
              New
            </Button>{" "}
            <Button
              variant="primary"
              onClick={() => {
                handleShowByStatus("active");
              }}
            >
              Active
            </Button>{" "}
            <Button
              variant="secondary"
              onClick={() => {
                handleShowByStatus("inActive");
              }}
            >
              InActive
            </Button>{" "}
          </Col>
          <Col>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={keyword}
                onChange={(event) => setKeyword(event.target.value)}
              />
              <Button
                variant="outline-success"
                onClick={() => {
                  handleSearch(keyword);
                }}
              >
                Search
              </Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <ProductList
            loading={props.loading}
            products={products}
            deleteProduct={props.deleteProduct}
          />
        </Row>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.productReducer.loading,
    products: state.productReducer.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    deleteProduct: (id) => dispatch(deleteProduct(id)),
    fetchProductsByStatus: (status) => dispatch(fetchProductsByStatus(status)),
    fetchProductsBySearch: (keyword) =>
      dispatch(fetchProductsBySearch(keyword)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
