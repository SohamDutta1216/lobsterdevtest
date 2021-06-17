import React from 'react'
import './header.css'

const header = ({ setRefresh }) => {
  const toggle = () => {
    setRefresh(prev => !prev)
  }
  return (
    <div>
      <header>
        <div class="overlay">
          <h1><img src='/logo.png' alt='logo' /></h1>
          <h3>Browse through thousands of randomly selected friends to find the right ones !</h3>
          <button onClick={toggle}>Shuffle Friends</button>
        </div>
      </header>
      <br />
    </div>
  )
}

export default header
