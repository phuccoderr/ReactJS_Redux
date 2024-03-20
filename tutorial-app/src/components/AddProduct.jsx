import React, { useState } from "react";

function AddProduct(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [status, setStatus] = useState("");

  const handleAddProduct = () => {
    props.addNewProduct({
      id: Math.floor(Math.random() * 100),
      name: name,
      price: price,
      status: status,
    });

    setName("");
    setPrice(0);
    setStatus("");
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div>
      <form>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => handleName(e)}
                />
              </td>
            </tr>
            <tr>
              <td>price</td>
              <td>
                <input type="number" value={price} onChange={handlePrice} />
              </td>
            </tr>
            <tr>
              <td>status</td>
              <td>
                <input type="text" value={status} onChange={handleStatus} />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button type="button" onClick={handleAddProduct}>
                  Add
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default AddProduct;
