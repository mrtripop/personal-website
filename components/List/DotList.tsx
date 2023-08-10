import React from 'react'

export type DotProps = {
  text?: string
}

const DotList = (props: DotProps) => {
  return (
    <p className="flex flex-row text-sm font-light">
      <span className="pr-2">&#x2022;</span> {props.text}
    </p>
  )
}

export default DotList
