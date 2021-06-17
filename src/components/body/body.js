import React from 'react'
import './body.css'
import Cards from '../cards/cards'

const body = ({ users, showModal, setShowModal }) => {
  return (
    <div>
      <Cards users={users} showModal={showModal} setShowModal={setShowModal} />
    </div>
  )
}

export default body
