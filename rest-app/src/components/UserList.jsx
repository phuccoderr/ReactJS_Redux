import React, { useEffect, useState } from "react";
import { deleteUser, getAllUser } from "../service/UserService";
import { Link } from "react-router-dom";

function UserList() {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    const getAll = () => {
      getAllUser()
        .then((response) => {
          console.log(response);
          setUser(response.data.results);
          setIsLoading(false)
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false)
        });
    };
    getAll();
  },[isLoading]);

  const handleDelete = (id) => {
    deleteUser(id)
      .then((response) => {
        console.log(response);
        setIsLoading(true)
      })
      .catch((error) => {
        console.log(error.message);
        setIsLoading(true)
      });
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>id</td>
            <td>name</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {user.map((data, index) => (
            <tr key={index}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>
                <Link to={`/users/update/${data.id}`} >
                  <button>update</button>
                </Link>
                &nbsp;
                <button type="button" onClick={() => handleDelete(data.id)}>
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
