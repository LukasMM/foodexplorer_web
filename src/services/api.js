import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://foodexplorer-api-xx7p.onrender.com'
})