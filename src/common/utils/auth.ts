import { AxiosRequestConfig, AxiosResponse } from "axios"

const paths: string[] = [""]

export const isAuthorizePath = (url: string | undefined) =>
  url ? paths.some(path => url.includes(path)) : false

export const setAuthHeader = (config: AxiosRequestConfig) => {
  const headers = isAuthorizePath(config.url)
    ? {
        ...config.headers,
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    : config.headers
  return {
    ...config,
    headers,
  }
}

export const setToken = (response: AxiosResponse) => {
  response.data.accessToken &&
    localStorage.setItem("token", response.data.accessToken)
  return response
}

export const logout = () => {
  localStorage.removeItem("token")
}

export const isAuthenticated = () => {
  return !!localStorage.getItem("token")
}
