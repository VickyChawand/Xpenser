import React from 'react'
import './header.css'
const Header = () => {
  return (
    <div className='header-conatiner'>
        <div className='header'>
            <div className='header-logo'>
                Xpenser <i class="fi fi-rr-credit-card"></i>
            </div>
            <div className='header-button'>
              <a href='https://github.com/VickyChawand' target='blank' rel='noopener noreferrer'>
            <i class="devicon-github-original colored"></i>Star
              </a>
            </div>
        </div>
    </div>
  )
}

export default Header