import React, { FC } from "react"
import { Route, Redirect } from "react-router-dom"

interface Props {
  path: string
  exact?: boolean
  component: FC
}

export const PrivateRoute: FC<Props> = ({ component, ...options }) => {
  const token = localStorage.getItem("token") || ""
  const Component: FC = token ? component : () => <Redirect to="/login" />
  return <Route component={Component} {...options} />
}
