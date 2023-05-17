'use client'

import { useState } from 'react'
import HamburgerButton from '@components/Button/HamburgerButton'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleButton = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="fixed top-0 w-full py-3 bg-dim-white z-[99999] ">
      <div className="container flex flex-wrap items-center w-full">
        <a className="inline-flex items-center py-2" href="/">
          <span className="text-2xl font-bold tracking-wide text-black">
            Mrtripop
          </span>
        </a>
        <HamburgerButton onClick={handleButton} />
        <div
          className={`${
            isOpen ? '' : 'hidden '
          } w-full lg:inline-flex lg:flex-grow lg:w-auto  `}
        >
          <ul className="flex flex-col items-start w-full lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto">
            <a className="nav-item " href="#about">
              About
            </a>
            <a className="nav-item" href="#experience">
              Experience
            </a>
            <a className="nav-item" href="#contact">
              Contact
            </a>
            <a className="nav-item" href="#follow">
              Follow
            </a>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
