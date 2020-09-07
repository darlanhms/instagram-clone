import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3333'
})

export const setToken = (token: string): void => {
  api.defaults.headers.common.Authorization = token
}

export default api
