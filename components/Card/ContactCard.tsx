import React from 'react'

type Props = {
  contact?: string
  textButton?: string
  onClick?: any
  src?: string
}

const ContactCard = (props: Props) => {
  return (
    <div className="relative mt-[114px] w-[600px] h-[400px] rounded-3xl bg-dim-white shadow-md flex flex-col items-center gap-14 justify-center pt-[114px]">
      <h2 className="text-3xl text-center text-dark-blue">{props.contact}</h2>
      <button
        className="w-[364px] h-[90px] rounded-[30px] border-[1px] border-gray bg-gray shadow-md text-2xl text-dark-blue "
        onClick={props.onClick}
      >
        {props.textButton}
      </button>
      <div
        style={{ backgroundImage: `url('${props.src}')` }}
        className="w-[230px] h-[230px] rounded-full absolute top-0 left-[50%] -translate-x-[50%] -translate-y-[50%] "
      />
    </div>
  )
}

export default ContactCard
