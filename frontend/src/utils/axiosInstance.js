import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL
})
console.log("axiosInstance loaded:", import.meta.env.VITE_BACKEND_URL)

export default axiosInstance