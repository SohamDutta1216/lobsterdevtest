import React, { useEffect, useState } from 'react'
import axios from 'axios'
function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=10')
      .then(res => {
        setTimeout(() => {
          setUsers(res.data)
        }, 300)
      }).catch(error => console.log(error))
  }, [])
  console.log(users)
  return (
    <div>
      HI
    </div>
  );
}

export default App;
