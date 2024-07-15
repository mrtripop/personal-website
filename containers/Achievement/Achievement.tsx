'use client'
import { AppWrap, MotionWrap } from '@components/Wrapper'
import { WorkType } from '@types'
import { motion } from 'framer-motion'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import React, { useEffect, useState } from 'react'

import './Achievement.scss'

const arrayActiveFilter: string[] = ['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All']

const Work = () => {
  const [works, setWorks] = useState<WorkType[]>([])
  const [animateCard, setAnimateCard] = useState<{ y: number; opacity: number }>({
    y: 0,
    opacity: 1,
  })

  useEffect(() => {
    const data: WorkType[] = [
      {
        _id: 'spring',
        title: 'test',
        description: 'test',
        projectLink: 'test',
        codeLink: 'test',
        imgUrl:
          'https://plus.unsplash.com/premium_photo-1720877266210-ee76a3cd0742?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        tags: ['All'],
      },
      {
        _id: 'spring',
        title: 'test',
        description: 'test',
        projectLink: 'test',
        codeLink: 'test',
        imgUrl:
          'https://plus.unsplash.com/premium_photo-1720877266210-ee76a3cd0742?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        tags: ['All'],
      },
    ]
    setWorks(data)
  }, [])

  return (
    <>
      <h2 className='head-text'>
        My <span>Achievement</span>
      </h2>

      <div className='app__work-filter'>
        {arrayActiveFilter.map((item, index) => (
          <div key={index} className='app__work-filter-item app__flex p-text'>
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__work-portfolio'
      >
        {works.map((work, index) => (
          <div className='app__work-item app__flex' key={index}>
            <div className='app__work-img app__flex'>
              <img src={work.imgUrl} alt={work.title} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className='app__work-hover app__flex'
              >
                <a href={work.projectLink} target='_blank' rel='noreferrer'>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className='app__flex'
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target='_blank' rel='noreferrer'>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className='app__flex'
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className='app__work-content app__flex'>
              <h4 className='bold-text'>{work.title}</h4>
              <p className='p-text' style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className='app__work-tag app__flex'>
                <p className='p-text'>{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  )
}

export default AppWrap(MotionWrap(Work, 'app__works'), 'work', 'app__primarybg')
