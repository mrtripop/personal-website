import { GithubImage, LinkedInImage, MediumImage } from '@assets'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className="h-[9.375rem] flex flex-col items-center justify-center  bg-dim-white">
      <div className="flex flex-col w-[11.5625rem] h-[4.25rem] gap-[1rem]">
        <div className="flex justify-between px-[20px]">
          <a href="https://github.com/mrtripop">
            <img src={GithubImage.src} alt="Github profile" />
          </a>
          <a href="https://www.linkedin.com/in/tripop-torcheep-145743192/">
            <img src={LinkedInImage.src} alt="LinkedIn profile" />
          </a>
          <a href="https://medium.com/@mrtripop">
            <img src={MediumImage.src} alt="Medium profile" />
          </a>
        </div>
        <h4 className="text-xs font-light tracking-[0.065rem] text-center text-black font-nunito">
          <span>&#169;</span> Copyright Mrtripop 2023
        </h4>
      </div>
    </div>
  )
}

export default Footer
