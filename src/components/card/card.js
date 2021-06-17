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
            <h3 style={{ color: 'black' }}>{user.name.first} {user.name.last}</h3>
          </div>
          <div class="back">
            <img src={user.picture.thumbnail} alt="profilepicture" style={{ marginTop: '5px' }} />
            <h6 class='info' style={{ marginTop: '10px' }}>Location : {user.location.country}, {user.location.city}</h6>
            <h6 class='info'>Age : {user.dob.age}</h6>
            <a href={'mailto:' + user.email}><h6 class='info'>Email : {user.email}</h6></a>
            <a href={'tel:' + user.phone}><h6 class='info'>Number : {user.phone}</h6></a>
          </div>
        </div>
      </div>
    </div >
  )
}


