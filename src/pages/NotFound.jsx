import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1>Error 404</h1>
      <p>Not Found</p>
      <br />
      <Link to="/">Trang chu</Link>
    </div>
  );
}

export default NotFound;
