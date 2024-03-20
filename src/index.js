import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import SignUp from "./components/SignUp";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Login2 from "./pages/Login2";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";

const user = {
  username: "Adam",
};
export const UserContext = React.createContext("root");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserContext.Provider value={user}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="sign" element={<SignUp />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />
            <Route path="login2" element={<Login2 />} />
            <Route path="products">
              <Route index element={<Products />} />
              <Route path=":productid" element={<ProductDetail />} />
            </Route>
          </Route>
          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
