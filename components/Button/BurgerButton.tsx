import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

type Props = {
  onClick?: () => void
}

const BurgerButton = (props: Props) => {
  return (
    <button
      onClick={props.onClick}
      className="w-[51px] h-[51px] rounded-full bg-white flex items-center justify-center"
    >
      <GiHamburgerMenu />
    </button>
  )
}

export default BurgerButton
