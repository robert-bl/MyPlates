import axios from "axios";

export const BASE_URL = 'http://localhost:3001'

const axiosCreate = axios.create({ baseURL: BASE_URL})

export default axiosCreate