import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './components/header/header'
import Body from './components/body/body'
import Footer from './components/footer/footer'

function App() {
  const [users, setUsers] = useState([])
  const [refresh, setRefresh] = useState(false)
  const [query, setQuery] = useState(10)
  useEffect(() => {
    axios.get(`https://randomuser.me/api/?results=${query}`)
      .then(res => {
        setTimeout(() => {
          setUsers(res.data)
        }, 300)
      }).catch(error => console.log(error))
  }, [refresh, query])

  const set10 = () => {
    setQuery(10)
  }

  const set20 = () => {
    setQuery(20)
  }

  const set30 = () => {
    setQuery(30)
  }
  return (
    <div>
      <Header setRefresh={setRefresh} refresh={refresh} />
      <div style={{ textAlign: 'center' }}>
        <button style={{ margin: '10px' }} onClick={set10}>10 per page</button>
        <button style={{ margin: '10px' }} onClick={set20}>20 per page</button>
        <button style={{ margin: '10px' }} onClick={set30}>30 per page</button>
      </div>
      <Body users={users} />
      <Footer />
    </div>
  );
}

export default App;
