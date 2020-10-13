import axios from "axios";

export const axiosWithAuth = () => {
  const adminToken = localStorage.getItem("adminToken");
  return axios.create({
    baseURL: "https://grandesigns.herokuapp.com",
    // baseURL: "http://localhost:5151",
    headers: {
      Authorization: adminToken,
    },
  });
};
