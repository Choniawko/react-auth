import React, { useEffect, useState, FC } from "react"
import { fetchData } from "../../common/utils"

export const Dashboard: FC = () => {
  const [books, setBooks] = useState([])
  useEffect(() => {
    fetchData("books")
      .then(({ data }) => setBooks(data))
      .catch(err => console.error(err.message))
  }, [])
  return (
    <div>
      {books.map(({ id, title }) => (
        <div key={id}>{title}</div>
      ))}
    </div>
  )
}
