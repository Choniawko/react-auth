import React, { useState, FC, FormEvent } from "react"
import { useHistory } from "react-router-dom"
import { fetchData } from "../../common/utils"

type InputEvent = FormEvent<HTMLInputElement>

export const Register: FC = () => {
  const { push } = useHistory()
  const [error, setError] = useState("")
  const [state, setState] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    age: "",
  })
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    fetchData("register", {
      method: "POST",
      data: state,
    })
      .then(() => {
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
      <div>
        <label>email</label>
        <input name="email" onInput={handleInput("email")} />
      </div>
      <div>
        <label>password</label>
        <input
          name="password"
          type="password"
          onInput={handleInput("password")}
        />
      </div>
      <div>
        <label>Firstname</label>
        <input name="firstname" onInput={handleInput("firstname")} />
      </div>
      <div>
        <label>email</label>
        <input name="lastname" onInput={handleInput("lastname")} />
      </div>
      <div>
        <label>email</label>
        <input name="age" type="number" onInput={handleInput("age")} />
      </div>
      <button>Submit</button>
    </form>
  )
}
