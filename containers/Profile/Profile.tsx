'use client'
import React from 'react'
import { AppWrap, MotionWrap } from '@components/Wrapper'
import { motion } from 'framer-motion'
import { images } from '@assets'

type Props = {}

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
}

const Profile = (props: Props) => {
  return (
    <div className="flex-row flex-1 w-full h-full px-8 pt-24 pb-0 app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="flex flex-[0.65] flex-col justify-start items-start h-full"
      >
        <div className="flex flex-col items-end justify-end w-full">
          <div className="badge-cmp app__flex">
            <span className="text-5xl">👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="text-sm leading-normal text-left text-new-gray">
                Hello, I am
              </p>
              <h1 className="text-5xl font-extrabold text-center capitalize text-new-black">
                Tripop
              </h1>
            </div>
          </div>
          <div className="app__flex tag-cmp">
            <p className="w-full text-right capitalize text-new-gray">
              Backend Engineer
            </p>
            <p className="w-full text-right capitalize text-new-gray">
              Frontend Engineer
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img
          src={images.PersonalImage.src}
          className="z-10 object-contain h-auto "
          alt="profile_bg"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[
          images.SpringBootLogoImage,
          images.ReactLogoImage,
          images.PostgresLogoImage,
        ].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle.src} alt="circle" className="w-[60%] h-[60%]" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Profile, 'profile')
