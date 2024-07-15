'use client'
import React, { useEffect, useState } from 'react'
import { AppWrap, MotionWrap } from '@components/Wrapper'
import { AboutType } from '@types'
import { motion } from 'framer-motion'

import './About.scss'

type Props = {}

const About = (props: Props) => {
  const [abouts, setAbouts] = useState<AboutType[]>([])

  useEffect(() => {
    const test = [
      {
        title: 'test',
        description: 'test some concept before continue',
        imgUrl:
          'https://images.unsplash.com/photo-1719587459422-b77a01945959?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        title: 'test',
        description: 'test some concept before continue',
        imgUrl:
          'https://images.unsplash.com/photo-1719587459422-b77a01945959?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        title: 'test',
        description: 'test some concept before continue',
        imgUrl:
          'https://images.unsplash.com/photo-1719587459422-b77a01945959?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ]

    setAbouts(test)
  }, [])

  return (
    <>
      <h2 className='head-text'>
        I Know That <span>Good Apps</span>
        <br /> means <span>Good Business</span>
      </h2>

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.1, type: 'tween' }}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={about.imgUrl} width={200} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className='p-text' style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(MotionWrap(About, 'app__about'), 'about', 'app__whitebg')
