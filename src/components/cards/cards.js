import React from 'react'
import './cards.css'
import Card from '../card/card'
import Modal from "react-modal";
import { CgClose } from 'react-icons/cg';

const cards = ({ users }) => {
  const allUsers = users.results
  return (
    <div>
      <br />
      <div class="cards">
        {allUsers && allUsers.map((user) => (
          <div className='card' key={user.id}>
            <Card user={user} />
          </div>
        ))}
      </div>
    </div>

  )
}

export default cards
