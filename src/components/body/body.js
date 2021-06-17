import React from 'react'
import './body.css'
import Cards from '../cards/cards'

const body = ({ users }) => {
  return (
    <div>
      <Cards users={users} />
    </div>
  )
}

export default body
