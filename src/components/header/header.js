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
          <button onClick={toggle}>New Friends</button>
        </div>
      </header>
      <br />
    </div>
  )
}

export default header
