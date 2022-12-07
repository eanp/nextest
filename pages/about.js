import { useState, useEffect } from 'react'

export default function About() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/comments/1')
      .then((res) => res.json())
      .then((response) => {
        setData(response)
        setLoading(false)
      })
    }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  return (
    <div>
      <h1>{data && data.name}</h1>
      <h6>{data && data.email}</h6>
      <p>{data && data.body}</p>
    </div>
  )
};