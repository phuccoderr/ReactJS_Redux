import React from "react";
import { useNavigate } from "react-router-dom";

function Login2() {
  const isLogging = true;
  const navigate = useNavigate();

  const handleLogin = () => {
    if (isLogging) {
      navigate("/", { replace: true });
    }
    return null;
  };

  return (
    <div>
      <h1>Login Form</h1>
      <table cellPadding={5}>
        <tr>
          <td>Username</td>
          <td>
            <input type="text" />
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

export default Login2;
