import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './components/header/header'
import Body from './components/body/body'
import Footer from './components/footer/footer'

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
  return (
    <div>
      <Header />
      <Body users={users} />
      <Footer />
    </div>
  );
}

export default App;
