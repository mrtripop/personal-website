'use client'
import React from 'react'
import { FaGithubSquare, FaMedium, FaLinkedin } from 'react-icons/fa'

import './Footer.scss'

const NewFooter = () => {
  return (
    <div className='app__footer app__flex app__secondarybg'>
      <div className='footer-content'>
        <div>
          <a href='https://github.com/mrtripop'>
            <FaGithubSquare size={30} color='white' />
          </a>
          <a href='https://www.linkedin.com/in/tripop-torcheep-145743192/'>
            <FaLinkedin size={30} color='white' />
          </a>
          <a href='https://medium.com/@mrtripop'>
            <FaMedium size={30} color='white' />
          </a>
        </div>
        <h4>
          <span>&#169;</span> Copyright Mrtripop 2024
        </h4>
      </div>
    </div>
  )
}

export default NewFooter
