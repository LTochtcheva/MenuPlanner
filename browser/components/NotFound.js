import React from 'react'
import { Link } from 'react-router'

const NotFound = () => {
  console.error('NotFound')
  return (
    <div>
      <h1>Sorry, I couldn't find whatever you asked for</h1>
      <p>Lost? <Link to="/">Here's a way home.</Link></p>
    </div>
  )
}

export default NotFound
