import  axios  from "axios";
const httpClient = axios.create({
    baseURL: import.meta.env.VITE_PUBLIC_BASE_URL_API
})

export default httpClient