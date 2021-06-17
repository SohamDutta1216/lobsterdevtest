import React from 'react'
import './cards.css'
import Card from '../card'

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
