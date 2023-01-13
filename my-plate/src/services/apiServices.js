import axios from "axios";

export const BASE_URL = 'https://git.heroku.com/myplates-hapi.git'

const axiosCreate = axios.create({ baseURL: BASE_URL})

axiosCreate.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers['authorization'] = `Bearer ${token}`
    }
    return config
},
(error) => Promise.reject(error)
)

export default axiosCreate