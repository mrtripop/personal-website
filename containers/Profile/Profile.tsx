'use client'
import React from 'react'
import { AppWrap, MotionWrap } from '@components/Wrapper'
import { motion } from 'framer-motion'
import { images } from '@assets'

import './Profile.scss'

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

const Profile = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>Hello, I am</p>
              <h1 className='head-text'>Tripop</h1>
            </div>
          </div>
          <div className='tag-cmp app__flex'>
            <p className='p-text'>Full Stack Developer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__header-img'
      >
        <img src={images.PersonalImage.src} alt='profile_bg' />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
        {[images.SpringBootLogoImage, images.ReactLogoImage, images.PostgresLogoImage].map(
          (circle, index) => (
            <div className='circle-cmp app__flex' key={`circle-${index}`}>
              <img src={circle.src} alt='circle' />
            </div>
          ),
        )}
      </motion.div>
    </div>
  )
}

export default AppWrap(MotionWrap(Profile, 'profile'), 'home', 'app__primarybg')
