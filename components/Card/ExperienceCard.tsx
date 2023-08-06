import Image from 'next/image'
import React from 'react'

type Props = {
  isImageLeft?: boolean
  title?: string
  subtitle?: string
  description?: string
  src?: string
  alt?: string
  onClick?: any
}

const ExperienceCard = ({
  isImageLeft = false,
  title,
  subtitle,
  description,
  src = '',
  alt = '',
  onClick,
}: Props) => {
  return (
    <div
      className={`${
        isImageLeft ? 'flex-row-reverse' : 'flex-row'
      } flex gap-28 `}
    >
      <div className="flex flex-col flex-1 gap-6">
        <div>
          <h3 className="text-4xl font-medium text-dark-blue tracking-[0.08em]">
            {title}
          </h3>
          <h4 className="text-lg font-light text-dark-blue tracking-[0.08em]">
            {subtitle}
          </h4>
        </div>
        <p className="text-lg tracking-[0.1em]">{description}</p>
        <button
          className="w-[300px] h-[80px] rounded-[20px] bg-dark-blue text-white text-lg tracking-[0.08em]"
          onClick={onClick}
        >
          Learn more
        </button>
      </div>
      <div
        style={{ backgroundImage: `url(${src})` }}
        className="flex-1 h-[370px] bg-no-repeat bg-cover bg-center rounded-3xl"
      />
    </div>
  )
}

export default ExperienceCard
