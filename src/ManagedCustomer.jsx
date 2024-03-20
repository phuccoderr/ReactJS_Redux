import React, { useEffect, useState } from "react";
import { Button, Card, Container, Table } from "react-bootstrap";
import { toast } from "react-toastify";

function ManagedCustomer() {
  const [state, setState] = useState({
    access: true,
    create: false,
    delete: false,
    update: false,
  });
  useEffect(() => {
    getPermissions();
  }, []);
  const getPermissions = () => {
    let user =
      sessionStorage.getItem("user") != null
        ? JSON.parse(sessionStorage.getItem("user"))
        : "";
    let role = user ? user.role : "";

    fetch("http://localhost:4000/permissions?role=" + role + "&page=customer")
      .then((res) => {
        if (!res.ok) {
          toast.warning("You don't have any permissions to access");
          return false;
        }
        return res.json();
      })
      .then((resp) => {
        console.log(resp.length);
        console.log(resp);
        if (resp.length > 0) {
          let permission = resp[0];
          console.log(permission)
          setState({
            access: permission.access,
            create: permission.create,
            delete: permission.delete,
            update: permission.update,
          });
        } else {
          setState({ access: false });
          toast.warning("You dont have any permission to access");
        }
      })
      .catch((error) => {
        setState({ access: false });
        toast.error(error.message);
      });
  };
  const handleAdd = () => {
    if (state.create) {
      toast.success("Added success");
    } else {
      toast.warning("You dont have any permission to access");
    }
  };

  const handleUpdate = () => {
    if (state.update) {
      toast.success("Updated success");
    } else {
      toast.warning("You dont have any permission to access")
    }
  }

  const handleDelete = () => {
    if (state.delete) {
      toast.success("Delete success");
    } else {
      toast.warning("You dont have any permission to access")
    }
  }
  return (
    <Container>
      <Card>
        <Card.Header>Customer Listing</Card.Header>
        <Card.Body>
          <Button variant="primary" onClick={() => handleAdd()}>
            Add new
          </Button>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                  <Button variant="primary" onClick={() => handleUpdate()}>Update</Button>
                  <Button variant="danger" onClick={() => handleDelete()}>Delete</Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ManagedCustomer;
