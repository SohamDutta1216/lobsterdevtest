import React from 'react'
import './cards.css'
import Card from '../card/card'
const cards = ({ users, setShowModal, showModal }) => {
  const allUsers = users.results
  console.log(allUsers)
  return (
    <div>
      <br />
      <div class="cards">
        {allUsers && allUsers.map((user) => (
          <div className='card'>
            <Card user={user} showModal={showModal} setShowModal={setShowModal} />
          </div>
        ))}
      </div>
    </div>

  )
}

export default cards
