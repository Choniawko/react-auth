import React from "react"
import { Link, useHistory } from "react-router-dom"
import { logout, isAuthenticated } from "../../common/utils"
import logo from "./logo.svg"

const pages = [
  { path: "/", label: "Dashboard", authorized: true },
  { path: "/profile", label: "profile", authorized: true },
  { path: "/register", label: "Register", authorized: false },
  { path: "/login", label: "Login", authorized: false },
]

export const Header = () => {
  const { push } = useHistory()
  const handleClick = () => {
    logout()
    push("/login")
  }
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      {pages
        .filter(({ authorized }) => isAuthenticated() === authorized)
        .map(({ path, label }) => (
          <Link key={path} to={path}>
            {label}
          </Link>
        ))}

      {isAuthenticated() && (
        <button type="button" onClick={handleClick}>
          Logout
        </button>
      )}
    </header>
  )
}
