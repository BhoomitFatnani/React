import React from 'react'

export default function Navbar(props) {
    console.log(props)
  return (
    <div>
        <h2>{props.passedname}</h2>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Products</li>
        </ul>
    </div>
  )
}
