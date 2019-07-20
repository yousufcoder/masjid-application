import React from 'react'
import Tilt from 'react-tilt'
import masjid1 from './masjid1.png'
import './logo.css'

const Logo = () => {
  return (
    <div>
      <Tilt
        className='Tilt'
        options={{ max: 35 }}
        style={{ borderradius: '150px', height: 20, width: 20 }}
      >
        <div className='Tilt-inner pr3'>
          <img style={{ paddingTop: '5px' }} alt='logo' src={masjid1} />
        </div>
      </Tilt>
    </div>
  )
}
export default Logo
