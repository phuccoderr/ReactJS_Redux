import React from "react";
import { Button, Table } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

function ProductList(props) {
  if (props.loading === true) {
    return <div>Loading Data...</div>;
  }
  const handleDelete = (product) => {
    if (window.confirm("Are you sure want to delete this product with id: " + product.id)) {
      props.deleteProduct(product);
    }
  }
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Content</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {props.products.map((data, index) => (
          <tr key={index}>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.price}</td>
            <td>{data.content}</td>
            <td>{data.status}</td>
            <td>
              <Link to={`/update-product/${data.id}`}>
                <Button variant="primary"><FaEdit /> Update</Button>
              </Link>{" "}
              <Button onClick={() => {handleDelete(data)}}>
                <FaTrash />
                <span>Delete</span>
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ProductList;
