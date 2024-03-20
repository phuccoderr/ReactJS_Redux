import React from "react";
import { useParams } from "react-router-dom";

function ProductDetail(props) {
  const { productid } = useParams(); //Destructuring
  return (
    <div>
      <h1>Product {productid} Detail Page !</h1>
    </div>
  );
}

export default ProductDetail;
