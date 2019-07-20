import React from 'react'
import Logo from '../logo/logo'

export default function Layout ({ children }) {
  return (
    <div>
      <header>
        <Logo />
        {children}
      </header>
    </div>
  )
}
