import axios from "axios";

export const axiosWithAuth = () => { 
    const adminToken = localStorage.getItem("adminToken")
    return axios.create({
        // baseURL: "https://grandesigns.herokuapp.com",
        baseURL: "http://localhost:5151",
        headers: {
            Authorization: adminToken
        }
    });
}

export const imageUploadAxios = () => { 
    const clientid = 'cf30ab951c235bf';
    const clientSecret = '1271df1faa6160fd23faf19676dbdc55b609190d';
    return axios.create({
        baseURL: "https://api.imgur.com/3/upload",
        headers: {
            Authorization: `Client-ID ${clientid}` 
        }
    });
}