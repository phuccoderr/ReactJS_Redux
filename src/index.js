import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './config/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './pages/Products';
import "bootstrap/dist/css/bootstrap.min.css"
import AddProduct from './pages/AddProduct';
import UpdateProduct from './pages/UpdateProduct';
// import counterReducer from "./reducers/counterReducers";

const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log(store.getState())
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={App} />
          <Route path="/manage-product" Component={Products} />
          <Route path='/add-product' Component={AddProduct} />
          <Route path='/update-product/:productId' Component={UpdateProduct} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
