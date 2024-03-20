import axios from "axios";

const BASE_URL_PRODUCTS  = "http://localhost:4000/products";
export const getAllProducts = async () => {
    return await axios.get(BASE_URL_PRODUCTS);
};