import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

type Props = {
  onClick?: any
}

const HamburgerButton = (props: Props) => {
  return (
    <button
      onClick={props.onClick}
      className="inline-flex p-3 ml-auto text-white rounded outline-none hover:bg-green-600 lg:hidden hover:text-white"
    >
      <GiHamburgerMenu />
    </button>
  )
}

export default HamburgerButton
