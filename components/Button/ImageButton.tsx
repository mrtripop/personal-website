import React from 'react'

type Props = {
  src?: any
  alt?: string
  onClick?: any
}

const ImageButton = (props: Props) => {
  return (
    <button onClick={props.onClick}>
      <img className="w-[270px] h-[270px]" src={props.src} alt={props.alt} />
    </button>
  )
}

export default ImageButton
