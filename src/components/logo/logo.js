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
        style={{ height: 5, width: 5 }}
      >
        <div className='org'>
          <div className='Tilt-inner'>
            <img alt='logo' src={masjid1} />
          </div>
        </div>
      </Tilt>
    </div>
  )
}
export default Logo
