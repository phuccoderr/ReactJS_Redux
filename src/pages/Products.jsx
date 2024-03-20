import queryString from "query-string";
import React, { useState } from "react";
import { Nav, Table } from "react-bootstrap";
import { Link, useLocation, useSearchParams } from "react-router-dom";

function Products() {
  const products = [
    {
      id: 1,
      name: "iphone",
      status: "all",
    },
    {
      id: 2,
      name: "samsung",
      status: "active",
    },
    {
      id: 3,
      name: "huewei",
      status: "inactive",
    },
  ];

  let [searchParams, setSearchParams] = useSearchParams();
  let location = useLocation();
  console.log(location);
  let [filteredStatus, setFilteredStatus] = useState(() => {
    const params = queryString.parse(location.search);
    return params.status || "all";
  });

  const handleShowAll = () => {
    setFilteredStatus("all");
    setSearchParams({ status: "all" });
  };

  const handleActive = () => {
    setFilteredStatus("active");
    setSearchParams({ status: "active" });
  };
  const handleInActive = () => {
    setFilteredStatus("inactive");
    setSearchParams({ status: "inactive" });
  };

  const handleNew = () => {
    setFilteredStatus("new");
    setSearchParams({ status: "new" });
  };

  const renderedProductList = products.filter(
    (product) => filteredStatus === "all" || filteredStatus === product.status
  );

  return (
    <div>
      <h1>Our Products</h1>
      <Nav variant="pills" defaultActiveKey="#">
        <Nav.Item>
          <Nav.Link href="#" onClick={handleShowAll}>
            Show All
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey={"link-1"} onClick={handleActive}>
            Show Active
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey={"link-2"} onClick={handleInActive}>
            Show InActive
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey={"link-3"} onClick={handleNew}>
            Show New
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <br />
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>status</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {renderedProductList.map((product, index) => (
            <tr>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.status}</td>
              <td>
                <Link to={`/products/${product.id}`}>View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Products;
