import React from 'react'

type Props = {
  onClick?: any
  text: string
}

const Button = (props: Props) => {
  return (
    <button
      onClick={props.onClick}
      className="w-[300px] h-[90px] bg-dim-white border-[1px] rounded-3xl"
    >
      <span className="text-4xl uppercase font-bold tracking-[0.08em] text-dark-blue">
        {props.text}
      </span>
    </button>
  )
}

export default Button
