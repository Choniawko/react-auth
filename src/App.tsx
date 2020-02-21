import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"
import { PrivateRoute } from "./common/UI"
import { Dashboard } from "./components/Dashboard"
import { Profile } from "./components/Profile"
import { Login } from "./components/Login"
import { Register } from "./components/Register"
import { Header } from "./components/Header"

export const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <PrivateRoute exact component={Dashboard} path="/" />
        <PrivateRoute exact component={Profile} path="/profile" />
      </Switch>
    </Router>
  )
}

export default App
