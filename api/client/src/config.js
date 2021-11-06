import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: "https://blogbits.herokuapp.com/api/"
})