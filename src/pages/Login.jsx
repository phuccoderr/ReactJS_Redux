import React, { useState } from "react";
import { Navigate } from "react-router-dom";

function Login() {
  const [state, setState] = useState({
    user: "",
    error: "",
  });

  const handleUser = (e) => {
    setState((prevState) => ({
      ...prevState,
      user: e.target.value,
    }));
    console.log(state);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    try {
    } catch (error) {
      setState({ error });
    }
  };
  return (
    <div>
      {state.error && <p>{state.error}</p>}
      {state.user && <Navigate to="/about" replace={true} />}
      <h1>Login Form</h1>
      <table cellPadding={5}>
        <tr>
          <td>Username</td>
          <td>
            <input type="text" value={state.user} onChange={handleUser} />
          </td>
        </tr>
        <tr>
          <td>Password</td>
          <td>
            <input type="password" />
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <button onClick={handleLogin}>Login</button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Login;
