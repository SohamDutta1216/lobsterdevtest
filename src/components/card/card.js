import React from 'react'
import './card.css'
import { CgProfile } from 'react-icons/cg'

export default function card({ user }) {
  console.log(user)
  return (
    < div >
      <div class="container">
        <div class="profile-card">
          <div class="front">
            <img src={user.picture.large} alt="profilepicture" />
            <h2 style={{ color: 'black' }}>{user.name.first} {user.name.last}</h2>
          </div>
          <div class="back">
            <img src={user.picture.thumbnail} alt="profilepicture" style={{ marginTop: '10px' }} />
            <h5 style={{ marginTop: '10px' }}>Location : {user.location.country}, {user.location.city}</h5>
            <h5>Age : {user.dob.age}</h5>
            <h5>Email : {user.email}</h5>
            <h5>Number : {user.phone}</h5>
          </div>
        </div>
      </div>
    </div >
  )
}


