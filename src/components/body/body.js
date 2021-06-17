import React from 'react'
import './body.css'
import Cards from '../cards/cards'

const body = ({ users, showModal, setShowModal, setInfo, modalInfo }) => {
  return (
    <div>
      <Cards users={users} showModal={showModal} setShowModal={setShowModal} setInfo={setInfo} modalInfo={modalInfo} />
    </div>
  )
}

export default body
