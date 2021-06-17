import React from 'react'
import './card.css'
import { CgProfile } from 'react-icons/cg'
import Modal from "react-modal";
import { CgClose } from 'react-icons/cg'
const card = ({ user, setShowModal, showModal }) => {
  function triggerModal() {
    setShowModal(prev => !prev)
    console.log(user)
  }
  return (
    <div>
      <div class="container">
        <div class="profile-card">
          <div class="front">
            <img src={user.picture.large} alt="profilepicture" />
          </div>
          <div class="back">
            <h2>{user.name.first} {user.name.last}</h2>
            <button className='btn' onClick={triggerModal}><CgProfile /></button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default card
