import axios from "axios";

export const axiosWithAuth = () => { 
    const adminToken = localStorage.getItem("adminToken")
    return axios.create({
        baseURL: "https://grandesigns.herokuapp.com",
        headers: {
            Authorization: adminToken
        }
    });
}