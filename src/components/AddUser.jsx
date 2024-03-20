import React, { useState } from "react";
import { createUser } from "../service/UserService";

function AddUser() {
  const [request, setRequest] = useState({
    name: "",
    email: "",
    password: "",
    enabled: true,
    roles: [{
        id: 2,
        name: "STAFF"
    }]
  });
  const handleRequest = (e) => {
    const { name, value } = e.target;
    setRequest((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    createUser(request).then((response) => {
        console.log(response)
        
    }).catch(error => {
        console.log(error)
    })
  }
  return (
    <form>
      <table>
        <tbody>
          <tr>
            <td>name</td>
            <td>
              <input
                type="text"
                name="name"
                value={request.name}
                placeholder="enter name..."
                onChange={handleRequest}
              />
            </td>
          </tr>
          <tr>
            <td>email</td>
            <td>
              <input
                type="email"
                name="email"
                value={request.email}
                placeholder="enter email..."
                onChange={handleRequest}
              />
            </td>
          </tr>
          <tr>
            <td>password</td>
            <td>
              <input
                type="email"
                name="password"
                value={request.password}
                placeholder="enter password..."
                onChange={handleRequest}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button type="button" onClick={handleSubmit}>submit</button>
    </form>
  );
}

export default AddUser;
