import * as React from 'react'
import './Header.css'

const Header = ({ children }: any) => {
  return (
    <div className='header'>
      {children}
    </div>
    )
}

export default Header;