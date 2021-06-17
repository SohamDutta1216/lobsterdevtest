import React from 'react'
import './footer.css'
import { AiFillLinkedin } from 'react-icons/ai'
const footer = () => {
  return (
    <div className='footer'>
      <br />
      <footer>
        <p style={{ marginBottom: '30px', marginTop: '30px', fontSize: '20px' }}> Soham Dutta<br />
          <a href="https://www.linkedin.com/in/soham-dutta-932550181/" target='_blank' rel="noreferrer"><AiFillLinkedin style={{ fontSize: '30px', marginTop: '30px' }} /></a></p>
      </footer>
    </div>
  )
}

export default footer
