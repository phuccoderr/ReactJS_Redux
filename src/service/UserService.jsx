import axios from "axios";

const BASE_URL_USER = "http://localhost:8080/auth/users";

export const getAllUser = async () => {
    return await axios.get(BASE_URL_USER);
};

export const getUserId = async (id) => {
    return await axios.get(`${BASE_URL_USER}/${id}`);
};

export const createUser = (request) => {
    return axios.post(BASE_URL_USER,request)
}

export const updateUser = async (request,id) => {
    return await axios.put(`${BASE_URL_USER}/${id}`,request)
}

export const deleteUser = async (id) => {
    return await axios.delete(`${BASE_URL_USER}/${id}`);
}