import React from 'react'

type Props = {
  technology?: string
}

const DotList = (props: Props) => {
  return (
    <p className="font-light">
      <span className="pr-2">&#x2022;</span> {props.technology}
    </p>
  )
}

export default DotList
