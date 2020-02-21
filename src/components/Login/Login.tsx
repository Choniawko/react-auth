import React, { useState, FC, FormEvent } from "react"
import { useHistory } from "react-router-dom"
import { fetchData } from "../../common/utils"

type InputEvent = FormEvent<HTMLInputElement>

export const Login: FC = () => {
  const { push } = useHistory()
  const [error, setError] = useState("")
  const [state, setState] = useState({
    email: "",
    password: "",
  })
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const { email, password } = state
    e.preventDefault()
    fetchData("login", {
      method: "POST",
      data: { email, password },
    })
      .then(res => {
        push("/")
      })
      .catch(({ message }: Error) => {
        setError(message)
      })
  }
  const handleInput = (fieldName: string) => ({
    currentTarget: { value },
  }: InputEvent) => {
    setState({
      ...state,
      [fieldName]: value,
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>{error}</div>
      <input name="email" onInput={handleInput("email")} />
      <input name="password" onInput={handleInput("password")} />
      <button>Submit</button>
    </form>
  )
}
