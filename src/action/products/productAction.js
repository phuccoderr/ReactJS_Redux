import axios from "axios";
import {
  CREATE_PRODUCT_FAILURE,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  DELETE_PRODUCT_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCT_FAILURE,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILURE,
  UPDATE_PRODUCT_SUCCESS,
} from "./productType";
const BASE_URL_PRODUCTS = "http://localhost:4000/products";

export const fetchProductsRequest = () => {
  return {
    type: FETCH_PRODUCTS_REQUEST,
  };
};

export const fetchProductsSuccess = (products) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products,
  };
};

export const fetchProductsFailure = (error) => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error,
  };
};

export const createProductRequest = () => {
  return {
    type: CREATE_PRODUCT_REQUEST,
  };
};

export const createProductSuccess = (product) => {
  return {
    type: CREATE_PRODUCT_SUCCESS,
    payload: product,
  };
};

export const createProductFailure = (error) => {
  return {
    type: CREATE_PRODUCT_FAILURE,
    payload: error,
  };
};

export const fetchProductRequest = () => {
  return {
    type: FETCH_PRODUCT_REQUEST,
  };
};

export const fetchProductSuccess = (product) => {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    payload: product,
  };
};

export const fetchProductFailure = (error) => {
  return {
    type: FETCH_PRODUCT_FAILURE,
    payload: error,
  };
};

export const updateProductSuccess = (product) => {
  return {
    type: UPDATE_PRODUCT_SUCCESS,
    payload: product,
  };
};

export const updateProductFailure = (error) => {
  return {
    type: UPDATE_PRODUCT_FAILURE,
    payload: error,
  };
};

export const deleteProductSuccess = (product) => {
  return {
    type: DELETE_PRODUCT_SUCCESS
  };
};

export const deleteProductFailure = (error) => {
  return {
    type: DELETE_PRODUCT_FAILURE,
    payload: error,
  };
};

//axios

export const deleteProduct = (product) => {
  return async (dispatch) => {
    await axios
      .delete(`${BASE_URL_PRODUCTS}/${product.id}`)
      .then(res => {
        if (res && res?.status === 200) {
          dispatch(deleteProductSuccess());
          dispatch(fetchProducts());
        } else {
          dispatch(deleteProductFailure());
        }
      })
      .catch(error => {
        dispatch(deleteProductFailure());
      });
  };
};

export const updateProduct = (product) => {
  return async (dispatch) => {
    console.log(product);
    await axios
      .put(`${BASE_URL_PRODUCTS}/${product.id}`, product)
      .then((res) => {
        if (res && res?.status === 200) {
          dispatch(updateProductSuccess(res?.data));
          console.log(res.data);
        } else {
          dispatch(updateProductFailure("Bad Request"));
        }
      })
      .catch((error) => {
        dispatch(updateProductFailure(error.message));
      });
  };
};

export const fetchProduct = (id) => {
  return async (dispatch) => {
    dispatch(fetchProductRequest());
    await axios
      .get(`${BASE_URL_PRODUCTS}/${id}`)
      .then((res) => {
        dispatch(fetchProductSuccess(res.data));
      })
      .catch((error) => {
        dispatch(fetchProductFailure(error.message));
      });
  };
};

export const createProduct = (product) => {
  return async (dispatch) => {
    dispatch(createProductRequest());
    await axios
      .post(BASE_URL_PRODUCTS, product)
      .then((res) => {
        if (res.status === 201) {
          dispatch(createProductSuccess(res.data));
        } else {
          dispatch(createProductFailure("Created failed"));
        }
      })
      .catch((error) => {
        dispatch(createProductFailure(error?.message));
      });
  };
};

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch(fetchProductsRequest());
    await axios
      .get(BASE_URL_PRODUCTS)
      .then((res) => {
        dispatch(fetchProductsSuccess(res.data));
      })
      .catch((error) => {
        dispatch(fetchProductsFailure(error));
      });
  };
};

export const fetchProductsByStatus = (status) => {
  return async (dispatch) => {
    dispatch(fetchProductsRequest());
    const apiUrl = status === undefined ? BASE_URL_PRODUCTS : `${BASE_URL_PRODUCTS}?status=${status}`;
    await axios
      .get(apiUrl)
      .then((res) => {
        dispatch(fetchProductsSuccess(res.data));
      })
      .catch((error) => {
        dispatch(fetchProductsFailure(error));
      });
  };
};

export const fetchProductsBySearch = (keyword) => {
  return async (dispatch) => {
    dispatch(fetchProductsRequest());
    const apiUrl = keyword === undefined ? BASE_URL_PRODUCTS : `${BASE_URL_PRODUCTS}?name=${keyword}`;
    await axios
      .get(apiUrl)
      .then((res) => {
        dispatch(fetchProductsSuccess(res.data));
      })
      .catch((error) => {
        dispatch(fetchProductsFailure(error));
      });
  };
};
