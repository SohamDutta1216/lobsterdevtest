import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './components/header/header'
import Body from './components/body/body'
import Footer from './components/footer/footer'

function App() {
  const [users, setUsers] = useState([])
  const [refresh, setRefresh] = useState(false)
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=10')
      .then(res => {
        setTimeout(() => {
          setUsers(res.data)
        }, 300)
      }).catch(error => console.log(error))
  }, [refresh])
  return (
    <div>
      <Header setRefresh={setRefresh} refresh={refresh} />
      <Body users={users} showModal={showModal} setShowModal={setShowModal} />
      <Footer />
    </div>
  );
}

export default App;
