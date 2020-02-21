import { baseUrl } from "./baseUrl"
import { setToken, setAuthHeader } from "./auth"
import axios, { Method } from "axios"

const headers = {
  "Content-Type": "application/json",
}

axios.interceptors.request.use(setAuthHeader)

axios.interceptors.response.use(setToken)

interface Options {
  method?: Method
  headers?: Headers
  data?: unknown
}

export const fetchData = (endpoint: string, options: Options = {}) =>
  axios(baseUrl(endpoint), {
    method: options.method || "GET",
    headers: { ...headers, ...options.headers },
    data: JSON.stringify(options.data),
  })
