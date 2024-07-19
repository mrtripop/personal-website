'use client'
import IconsButton from '@components/Button/IconsButton'
import { images } from '@assets'
import BurgerButton from '@components/Button/BurgerButton'

import './Navbar.scss'

const Navbar = () => {
  return (
    <nav className='nav-bar app__flex'>
      <div className='nav-bar__container'>
        <IconsButton src={images.BoyImage.src} />
        <div className='app__flex'>
          <h2 className='primary-gradient'>Mrtripop</h2>
        </div>
        <BurgerButton />
      </div>
    </nav>
  )
}

export default Navbar
