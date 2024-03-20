import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserId, updateUser } from "../service/UserService";

function UpdateUser(props) {
  const params = useParams();
  const userId = params.usersId;
  const [user, setUser] = useState({});
  useEffect(() => {
    getUserId(userId)
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleRequest = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    updateUser(user,userId)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
                value={user.name}
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
                value={user.email}
                placeholder="enter email..."
                onChange={handleRequest}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button type="button" onClick={handleSubmit}>save</button>
    </form>
  );
}

export default UpdateUser;
