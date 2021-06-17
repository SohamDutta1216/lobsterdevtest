import React from 'react'
import './card.css'
import { CgProfile } from 'react-icons/cg'
const card = ({ user }) => {
  return (
    <div class="container">
      <div class="profile-card">
        <div class="front">
          <img src={user.picture.large} alt="" />
        </div>
        <div class="back">
          <h2>{user.name.first} {user.name.last}</h2>
          <button className='btn'><CgProfile /></button>

        </div>
      </div>
    </div>

  )
}

export default card
