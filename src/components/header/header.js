import React from 'react'
import './header.css'

const header = ({ setRefresh, refresh }) => {
  const toggle = () => {
    setRefresh(refresh => !refresh)
  }
  return (
    <div>
      <header>
        <div class="overlay">
          <h1><img src='/logo.png' alt='logo' /></h1>
          <h3>Browse through thousands of randomly selected friends to find the right ones !</h3>
          <button onClick={toggle}>New Friends</button>
        </div>
      </header>
      <br />
    </div>
  )
}

export default header
